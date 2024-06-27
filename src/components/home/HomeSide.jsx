const { RES_URL } = import.meta.env

export default function HomeSide(props){
    const {data} = props
    return <div className="home-side">
        {
            data.map((e)=> {
                return <>
                    <div className="home-side-tit">
                        <strong>本周推荐图书</strong>
                        {e.week}
                    </div>

                    <div className="book-cover">
                        <img src={RES_URL + e.cover} alt=""/>
                    </div>
                </>

            })
        }

    </div>
}
