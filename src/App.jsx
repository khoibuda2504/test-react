import vCard from 'vcards-js'
function App() {
  const generateVCF= () => {
    const vcf  = vCard()
    vcf.firstName = 'BÙI';
    vcf.middleName = 'GIANG';
    vcf.lastName = 'QUỐC TRƯỜNG';
    vcf.organization = 'MXH01 - MACXY HOTEL';
    vcf.workPhone = '0981454722';
    vcf.title = 'TỔNG GIÁM ĐỐC';
    vcf.url = 'http://www.anphugia.com.vn';

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', `data:,${vcf.getFormattedString()}`)
    linkElement.setAttribute('download', 'card.vcf')
    linkElement.style.display = 'none'
    document.body.appendChild(linkElement)
    linkElement.click()
    document.body.removeChild(linkElement)
  }
  return (
    <div className="App">
      <p onClick={generateVCF}>CLick me</p>
    </div>
  )
}

export default App
