import TextAndImage from "../textAndImage/TextAndImage";

export default function TextAndImageContent() {
    return (
        <>
            <TextAndImage title={'Enjoy on your TV.'}
                          text={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
                          media={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'}
                          img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'}
                          //put rtl prop if need to have image first view
            />
            <TextAndImage title={'Download your shows to watch offline.'}
                          text={'Save your favorites easily and always have something to watch.'}
                          media={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'}
                          rtl
            />
        </>
    )
}