import vCard from 'vcards-js'
function App() {
  const generateVCF = () => {
    const vcf = vCard()
    vcf.firstName = 'BÙI';
    vcf.middleName = 'GIANG';
    vcf.lastName = 'QUỐC TRƯỜNG';
    vcf.organization = 'MXH01 - MACXY HOTEL';
    vcf.workPhone = '0981454722';
    vcf.title = 'TỔNG GIÁM ĐỐC';
    vcf.url = 'http://www.anphugia.com.vn';
    const vcard = vcf.getFormattedString()
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = 'hi' + ".vcf";
    newLink.textContent = 'hi';
    newLink.href = url;

    newLink.click();
  }
  return (
    <div className="App">
      <p onClick={generateVCF}>Click me v2</p>
    </div>
  )
}

export default App
