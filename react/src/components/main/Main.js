import Article from "../article/Article"
import PostsData from "../../data/posts"
import { useState } from "react"
import addArticle from "../addArticle/addArticle"
const Main = ()=>{
    const [clicked,setClicked] = useState(false);
    const [posts,setPosts] = useState([]);
    console.log(clicked);
    const handleClick = () =>{
        setClicked(true)
    }


    const handleFormData = (data) =>{
        setPosts((prevData)=>{
            return[data,...prevData]

        })
    }
    console.log('is main komponento',posts)
    if(clicked){
        return(
            <div>testas</div>
        )
        
    }else{
    return(
        <main>
        <h1>naujienos</h1>
        <p>pradejom mokytis react</p>
        /* <Article
        data={{title:"viskas ok",description:"ok viskas"}}
        />
        <Article
        title="labai gerai"
        description="gerai"
        />
        */
        {PostsData.map((post)=>
            <Article key={post.id} title={post.title} description={post.description}/>

        )}
        <button onClick={handleClick}>Paspaudziau</button>
        {Clicked && <h1>mygtukas yra paspaustas</h1>}

        <div>
            <h2>prideti naujiena</h2>
            <addArticle onSave={handleFormData}/>
        </div>
        </main>

        
    );
   
}}
export default Main