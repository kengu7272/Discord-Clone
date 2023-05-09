function Home() {
    return (
        <div className="h-full flex flex-row overflow-hidden">
            <div className="bg-zinc-800 border-b flex flex-row gap-6 items-center h-[7.5%] scrollbar-hide overflow-x-auto overflow-y-hidden py-3 w-fit">
                <button>=</button>
                <div>
                    <p>Friends</p>
                </div>
                <button>Online</button>
                <button>All</button>
                <button>Pending</button>
                <button>Blocked</button>
                <button>Add Friend</button>
            </div>

            <div>
                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default Home;