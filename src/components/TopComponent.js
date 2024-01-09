function PageList(props){
    console.log(pages)
    console.log(props)
    console.log(props.pages[0].text)
    return <a className="header--project" href={props.pages[0].text}>{props.pages[0].url}</a>
}

let pages = [
    {text:'About', url:'About'},
    {text:'Car Info', url:'CarInfo'},
    {text:'Schedule', url:'Schedule'},
    {text:'History', url:'History'}
]
export default function TopComponent() {
    return (
        <header className="header">
            <h2 className="header--title">Suby</h2>
            {/* <PageList text="About" url="About"></PageList>
            <PageList text="Car Info" url="CarInfo"></PageList> */}
            <PageList pages={pages}></PageList>
        </header>
    )
}