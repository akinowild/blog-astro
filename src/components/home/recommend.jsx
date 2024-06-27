const { RES_URL } = import.meta.env

export default function Recommend(props){
    const {data} = props
    return <div className="recommend">
        <div className="recommend-tit">
            <a href={'/blog/'+data.id}>{data.title}</a>
        </div>
        <div className="recommend-sub">
            {data.summary}
        </div>
        <div className="recommend-cover">
            <a href={'/blog/'+data.id}>
                <img src={RES_URL + data.cover} alt=""/>
            </a>
        </div>
    </div>
}
