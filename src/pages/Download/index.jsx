
function Download() {
    function handleRedirect(values) {
        const userAgent = navigator.userAgent.toLowerCase();
        console.log('Xử lý ');
        if (/iphone|ipad|ipod/.test(userAgent.toLowerCase())) {
          // Thiết bị iOS
          console.log('Thiết bị iOS');
          window.location.href = 'https://play.google.com/store/apps/details?id=vn.okuro.app&hl=vi&gl=US&pli=1';
          } else if (/android/.test(userAgent.toLowerCase())) {
            console.log('Thiết bị Android');
            // Thiết bị Android
            window.location.href = 'https://apps.apple.com/us/app/okuro/id1570372051';
          } else {
            console.log('Xử lý mặc định hoặc không xác định được');
            // window.location.href = 'https://apps.apple.com/us/app/okuro/id1570372051';
            // Xử lý mặc định hoặc không xác định được
          }
        }
        
        // handleRedirect()
    
    return (
        <div
            className="flex flex-col justify-between h-full w-full  bg-okuro-background-contact"
        >
            <div className="h-screen w-full flex justify-center items-center text-lg text-okuro-primary font-black">Loading...
                <button onClick={() => { handleRedirect() }}>Chuyển đến cửa hàng</button>
            </div>  
        </div>
    );
}

export default Download;
