import Nav from "./Nav"
import Hero from "./assets/climate.png"
function Home() {
    return (
        <div className="home-page">
            <Nav />
            <main>
                <section className="home-intro">
                    <p>
                        Climate-forecast is a website created for farmers to get real-time climate data and recommendations base on the climate data the best time for planting so as to maximise their productivity and efficiency.
                    </p>
                    <a href="/climate-info" className="get-started-link">Get Started</a>
                </section>
                <section className="home-hero">
                    <img src={Hero} alt="climate image" />
                </section>
            </main>

        </div>
    )
}

export default Home