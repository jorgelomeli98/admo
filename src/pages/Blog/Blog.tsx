import {Navbar} from "../../components"


const Blog = () => {
    return (
        <Navbar items={[
            {children: "Inicio", to:"/"}, 
            {children: "Somos", to:"#somos"},
            {children: "donativos", to:"#donativos"},
            {children: "Blog", to: "/blog"}, 
            {children: "Contacto", to: "/contacto"}, 
            {children: "Ubicacion", to: "#ubicacion"}
        ]}/>
    )
}

export default Blog;