import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Layout>

            <section id="inicio">
                <h2>¿Quienes somos?</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates quam vel corporis, ex reiciendis?
                </p>
            </section>

            <section id="cursos">
                <h2>Tenemos una gran variedad de cursos entre los que se encuentran:</h2>

                <ul>
                    <li>Guitarra</li>
                    <li>Saxofón</li>
                    <li>Violín</li>
                    <li>Bateria</li>
                    <li>Canto</li>
                    <li>Piano</li>
                </ul>
            </section>

            <section id="contacto">
                <h2>Contacto</h2>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque excepturi sequi sunt quidem ipsum!
                </p>
            </section>

        </Layout>
    );
}

export default App;