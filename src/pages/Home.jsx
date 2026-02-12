import Hero from "../sections/Hero"
import Features from "../sections/Features"

import Page from "../components/Page"

export default function Home(){
    return(
        <>
            <Page>
                <Hero />
                <Features />
            </Page>
        </>
    )
}