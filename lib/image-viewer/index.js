import ImageViewer from './image-viewer'

ImageViewer.install = function (Vue) {
  Vue.component(ImageViewer.name, ImageViewer)
}

export default ImageViewer
