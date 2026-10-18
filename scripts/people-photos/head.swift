import Vision
import AppKit
import CoreImage
for path in CommandLine.arguments.dropFirst() {
  let url = URL(fileURLWithPath: path)
  guard let img = NSImage(contentsOf: url), let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { continue }
  let W = cg.width, H = cg.height
  let handler = VNImageRequestHandler(cgImage: cg, options: [:])
  let face = VNDetectFaceLandmarksRequest()
  let seg = VNGeneratePersonSegmentationRequest(); seg.qualityLevel = .accurate
  try! handler.perform([face, seg])
  guard let f = face.results?.first, let mask = seg.results?.first?.pixelBuffer else { print(path, "no result"); continue }
  let size = CGSize(width: W, height: H)
  let contour = f.landmarks!.faceContour!.pointsInImage(imageSize: size)
  let chinY = Double(H) - contour.map{Double($0.y)}.min()!
  let b = f.boundingBox
  let cx = (b.midX) * Double(W), fw = b.width * Double(W)
  CVPixelBufferLockBaseAddress(mask, .readOnly)
  let mw = CVPixelBufferGetWidth(mask), mh = CVPixelBufferGetHeight(mask), rb = CVPixelBufferGetBytesPerRow(mask)
  let base = CVPixelBufferGetBaseAddress(mask)!.assumingMemoryBound(to: UInt8.self)
  // top of head: first mask row (from top) with person pixels in the face's central column band
  let x0 = Int((cx - fw*0.25) / Double(W) * Double(mw)), x1 = Int((cx + fw*0.25) / Double(W) * Double(mw))
  var top = -1
  outer: for y in 0..<mh { for x in max(0,x0)..<min(mw,x1) { if base[y*rb + x] > 127 { top = y; break outer } } }
  // head width: widest person span between head top and eye line, measured at the row 40% down from top to chin
  let headTop = Double(top) / Double(mh) * Double(H)
  print(String(format: "%@ W=%d H=%d cx=%.0f faceW=%.0f headTop=%.0f chin=%.0f headH=%.0f", url.lastPathComponent, W, H, cx, fw, headTop, chinY, chinY-headTop))
}
