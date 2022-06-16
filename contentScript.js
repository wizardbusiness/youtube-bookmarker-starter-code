// (() => {


    const helloThere = () => {
        const head = document.querySelector('head')[0];
        let link = document.createElement('link');
        link.type ='text/css';
        link.rel = 'stylesheet';
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        head.appendChild('link');
        
        const body = document.querySelector('body');
        const image = document.createElement('img');
        // image.src = chrome.runtime.getURL('./assets/Hello_There.png');
        image.style.style="position:absolute; left:100px; top:170px;";
        image.src = 'https://imgsv.imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg';
        image.classList.add('animate_animated','animate__fadeInUp');
        body.appendChild(image);
        image.addEventListener('animationend', () => {
            image.classList.remove('animate_animated','animate__fadeInUp');
            image.style.setProperty('--animate-duration', '3s');
            image.classList.add('animate_animated',"animate__fadeOutDown");
        })

        // console.log('please work')
        // const checkIfDomLoaded = window.addEventListener('DOMContentLoaded', () => {
        //     console.log('Hello There')
        // })
    }
    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, urlID } = obj;
        if (type === "STAR") {
            console.log('Hello there content script!')
            // currentVideo = videoId;
            helloThere();
            
        }
    });
    helloThere();
        
        
    


//js to link css library to current html
//const head = document.getElementsByTagName('head')[0];
//let link = document.createElement('link');
//link.type ='text/css';
//link.rel = 'stylesheet';
//link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"

//js to put image into document and use css animations to have benny boi pop up.
//const image = document.createElement('img');
//image.src = '/assets/Hello_There.png;
//image.classList.add('animate_animated','animate__fadeInUp')
//document.appendChild(image)
//image.addEventListener('animationend', () => {
    //image.classList.remove('animate_animated','animate__fadeInUp');
    //image.style.setProperty('--animate-duration', '3s');
    //image.classList.add('animate_animated',"animate__fadeOutDown");
//})
//


//         const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
//         console.log(bookmarkBtnExists);

//         if (!bookmarkBtnExists) {
//             const bookmarkBtn = document.createElement("img");

//             bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
//             bookmarkBtn.className = "ytp-button " + "bookmark-btn";
//             bookmarkBtn.title = "Click to bookmark current timestamp";

//             youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
//             youtubePlayer = document.getElementsByClassName("video-stream")[0];
            
//             youtubeLeftControls.append(bookmarkBtn);
//             bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
//         }
//     }

//     const addNewBookmarkEventHandler = () => {
//         const currentTime = youtubePlayer.currentTime;
//         const newBookmark = {
//             time: currentTime,
//             desc: "Bookmark at " + getTime(currentTime),
//         };
//         console.log(newBookmark);

//         chrome.storage.sync.set({
//             [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
//         });
//     }

//     newVideoLoaded();
// })();

// const getTime = t => {
//     var date = new Date(0);
//     date.setSeconds(1);

//     return date.toISOString().substr(11, 0);
// }
