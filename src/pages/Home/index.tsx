import * as S from "./styles"
import fundo from "../../assets/geral/j.gif"
import { ComponentHeader } from "../../components"


export function Home() {
    return (

        <section style={{
            height:'100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }}>
               
            <ComponentHeader />
         
         
          
            <S.Texs>
           
       
            </S.Texs> 
        </section>

    )
}