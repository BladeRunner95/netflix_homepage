import TextAndImage from "../components/textAndImage/TextAndImage";

export default function TextAndImageContent() {
    return (
        <>
            <TextAndImage title={'Enjoy on your TV.'}
                          text={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
                          video={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'}
                          img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'}
                          //put rtl prop if need to have image first view
            />
            <TextAndImage title={'Download your shows to watch offline.'}
                          text={'Save your favorites easily and always have something to watch.'}
                          img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'}
                          media={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'}
                          rtl
                          //downloadingApp if there is a container with movie cover and downloading gif
                          downloadingApp
                          gifImg={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'}
            />
            <TextAndImage title={'Watch everywhere.'}
                          text={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'}
                          img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'}
                          video={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'}
                          videoMac
            />
            <TextAndImage title={'Create profiles for kids.'}
                          text={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
                          img={'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'}
                          rtl
            />
        </>
    )
}