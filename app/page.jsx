import Feed from "@components/Feed"



const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share
            <br className="max-hd:hidden" />
            <span className="orange_gradient text-center">Prompts Powered by AI</span>
            </h1>
            <p className="desc text-center">
                PromptGenius is a modern open-source AI prompting platform for discovering, creating, and sharing creative ideas.
            </p>
            {/* Feed */}
            <Feed />
        </section>
    )
}

export default Home