import React from 'react';

const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
        name: symbolValue,
        email: symbolValue,
        subject: Wallet,
        message: priceValue
    };

    try {
      const response = await fetch("https://wizardstockexchange.onrender.com/trade/sell-shares/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast("Message Successfully Send");
        console.log("Request was successful");
        window.location.href = '/';
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

const helpcenter = () => {
    return (
        <div>
            <div className='flex'>
                <aside className='w-2/6 '>
                        <div className="col-md-4">
                            <div className="contact-info mt-5">
                                <h3>Find Us There</h3>
                                <div className="info">
                                    <p>Are you tired ? using excel, account book, calculator etc for your business accounting. So eManager can help you for this. It can give you all kinds of calculations, accounting and reports to manage your business easily. So why are you waiting for, contact us today and buy our subscription.
                                        </p>
                                        <div className="icons mt-5">
                                            <ul>
                                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="float-left mr-2" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                                                </svg>
                                                <span className="info-name">Phone:</span><br/><span className="second-span">+8801843306208</span></li><li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="float-left mr-2" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg><span className="info-name">Address:</span><br/><span className="second-span">House: X60, Road - 7/3, Block - A, Chandgaon R/A, Chattogram, Bangladesh</span></li><li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="float-left mr-2" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg><span className="info-name">E-Mail</span><br/><a href="mailto:emanager2022@gmail.com" target="_blank" className="color-red">emanager2022@gmail.com</a></li><li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="float-left mr-2" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg><span className="info-name">Skype</span><br/><a href="skype:live:flexibledesign01?chat" target="_blank" className="color-red">live:flexibledesign01</a></li><li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="float-left mr-2" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg><span class="info-name">Telegram</span><br/><a href="http://t.me/ajitdas5" target="_blank" classname="color-red">Ajit Das</a></li></ul></div></div></div></div>
                </aside>
                
                <div className="w-4/6">
                    <h3>Contact Form</h3>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="w-3/6">
                            <div className="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Your Name" required="" value=""/>

                                </div>
                            </div>
                            <div className="w-3/6">
                            <input type="text" name="name" class="form-control" placeholder="Your Email" required="" value=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>                
    );
};

export default helpcenter;