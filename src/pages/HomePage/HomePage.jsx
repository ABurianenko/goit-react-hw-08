import s from "./HomePage.module.css"
import DocumentTitle from "../../components/DocumentTitle"


export default function HomePage () {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <div className={s.homePage}>
                <h1>
                    Contact manager welcome page{' '}
                   <span role="img" aria-label="Greeting icon" >
                        💁‍♀️
                    </span> 
                </h1>
            </div>
        </>
    )
}