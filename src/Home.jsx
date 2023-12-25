import Nav from "./Nav"
import Hero from "./assets/climate.png"
function Home() {
    return (
        <div className="home-page">
            <Nav />
            <main>
                <section className="home-intro">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit fugit itaque distinctio architecto, culpa earum labore quos nobis beatae perferendis quo voluptates minus minima mollitia, eos porro possimus aperiam maiores! .Tempore dolorem beatae delectus similique omnis quibusdam, deleniti autem, obcaecati adipisci ratione neque at minus, temporibus vel quia assumenda recusandae. Eligendi ullam ut sunt quibusdam suscipit voluptas accusamus mollitia eaque.

                    </p>
                    <a href="/climate" className="get-started-link">Get Started</a>
                </section>
                <section className="home-hero">
                    <img src={Hero} alt="climate image" />
                </section>
            </main>

        </div>
    )
}

export default Home