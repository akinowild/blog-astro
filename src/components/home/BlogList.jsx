const { RES_URL } = import.meta.env

export default function BlogList(props){
    function convertDate(dateString) {
        const dateParts = dateString.split('T')[0].split('-');
        const timeParts = dateString.split('T')[1].split('.')[0].split(':');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        const hour = timeParts[0];
        const minute = timeParts[1];
        const second = timeParts[2];
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
    const {data} = props
    return <div className='blog-list'>
        <div className="blog-list-cover">
            <img src={RES_URL+data.cover} alt=""/>
        </div>
        <div className="blog-news">
            <div className="blog-title"><a href="">{data.title}</a></div>
            <div className="blog-desc">
                {data.summary}
            </div>
            <div className="blog-news-bottom">
                <div className="blog-news-time">
                    <strong>时间：</strong>{convertDate(data.date_created)}
                </div>
                <div className="blog-news-tag">
                    {
                        data.tag?.map((e)=> {
                            return <a href="">{e}</a>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}
