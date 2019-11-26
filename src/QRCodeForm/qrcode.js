function Qrcode() {
    let firstName = 'Lisa';
    let lastName = 'Nguyen';
    let companyOrg = 'SOCIAL TAB.'
    let title = 'President'
    let emailReplace = 'lisalenguyen@icloud.com'
    let email = emailReplace.replace("@", "%40");
    let telTyeCell = '5555555555'
    let teltypeVoice = '5551231234'
    let note = 'www.twitter.com'
    let url = 'www.abc.com'
    let address = 'Suite+451+Main+St.%253bMiami%253bFlorida%253b123456%253bUSA'
    let qrUrl = `https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aN%3a$(398 B)
https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aN%3a$
{lastName}%3b${firstName}%0d%0aORG
    %3a${companyOrg}.%0d%0aTITLE%3a${title}%0d%0aEMAIL%3a${email}%0d%0aTEL%3bTYPE%3d
    CELL%3a${telTyeCell}%0d%0aTEL%3bTYPE%3dWORK%2c%0d%0aVOICE%3a${teltypeVoice}%0d%0aNOTE%3a${note}%0d%0a
    URL%3a${url}%0d%0aADR%3a%3b%3b${address}
    %0d%0aEND%3aVCARD%0A&addtext=&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=300`
    return (
        <>
        <img alt='qrcode' src={qrUrl}></img>
        </>
    );
}
export default Qrcode;