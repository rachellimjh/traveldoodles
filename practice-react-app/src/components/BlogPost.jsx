export default function(props){
    return (
        <>
        <div className="blog-wrapper">
            <h1>{props.title}</h1>
            <p>{props.d}</p>
            <p>{props.a}</p>
        </div>
        </>
    )
}