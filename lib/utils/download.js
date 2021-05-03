// 基础前端下载文件
export default function download(url, filename) {
  const a = document.createElement('a')
  const event = new MouseEvent('click')
  a.target = '_blank'
  a.download = filename
  a.href = url
  document.body.appendChild(a)
  a.dispatchEvent(event)
}