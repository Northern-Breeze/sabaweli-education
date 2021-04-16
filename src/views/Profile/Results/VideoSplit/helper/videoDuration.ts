const loadVideo = (file: File) => new Promise((resolve, reject) => {
    try {
        const video = document.createElement('video')
        video.preload = 'metadata'

        video.onloadedmetadata = function () {
            resolve(video);
        }

        video.onerror = function () {
            reject("Invalid video. Please select a video file.")
        }

        video.src = window.URL.createObjectURL(file)
    } catch (e) {
        reject(e)
    }
})

export default loadVideo;