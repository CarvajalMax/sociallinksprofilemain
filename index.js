
const trabajoWeb =()=> {
  const contenedorImagen =document.createElement("div")
  contenedorImagen.className = "imagen"
  const imagen = document.createElement("img")
  imagen.src = "./assets/images/avatar-jessica.jpeg"
  contenedorImagen.appendChild(imagen)

  const SeccionPersonal = document.createElement("div")
  SeccionPersonal.className = "text"
  const Nombre = document.createElement("p")
  const Ubicacion = document.createElement("p")
  const Texto = document.createElement("p")
  Nombre.className = "jun nombre"
  Ubicacion.className = "jun ubicacion"
  Texto.className="texto"
  const NombreTexto=document.createTextNode('Jessica Randall')
  const UbicacionTexto=document.createTextNode('London, United Kingdom')
  const TextoTexto=document.createTextNode('Front-end developer and avid reader.')
  Nombre.appendChild(NombreTexto)
  Ubicacion.appendChild(UbicacionTexto)
  Texto.appendChild(TextoTexto)
  SeccionPersonal.appendChild(Nombre)
  SeccionPersonal.appendChild(Ubicacion)
  SeccionPersonal.appendChild(Texto)

  const Botones = document.createElement("div")
  Botones.className = "bottom"
  const Boton1 = document.createElement("a")
  const Boton2 = document.createElement("a")
  const Boton3 = document.createElement("a")
  const Boton4 = document.createElement("a")
  const Boton5 = document.createElement("a")
  Boton1.className = "btn btn-1"
  Boton2.className = "btn btn-2"
  Boton3.className = "btn btn-3"
  Boton4.className = "btn btn-4"
  Boton5.className = "btn btn-5"
  const Boton1Texto=document.createTextNode('GitHub')
  const Boton2Texto=document.createTextNode('Fronted Mentor')
  const Boton3Texto=document.createTextNode('LinnkedIn')
  const Boton4Texto=document.createTextNode('Twitter')
  const Boton5Texto=document.createTextNode('Instagram')
  Boton1.appendChild(Boton1Texto)
  Boton2.appendChild(Boton2Texto)
  Boton3.appendChild(Boton3Texto)
  Boton4.appendChild(Boton4Texto)
  Boton5.appendChild(Boton5Texto)
  
  Botones.appendChild(Boton1)
  Botones.appendChild(Boton2)
  Botones.appendChild(Boton3)
  Botones.appendChild(Boton4)
  Botones.appendChild(Boton5)

  const Contenedor = document.createElement("div")
  Contenedor.className="cont-1"

  Contenedor.appendChild(contenedorImagen)
  Contenedor.appendChild(SeccionPersonal)
  Contenedor.appendChild(Botones)
  return Contenedor
}

const Nodo=document.querySelector('#caja')
const Card=document.querySelector('#BotonAñadido')

const AddTarea =()=>{
  Nodo.appendChild(trabajoWeb())
}

Card.addEventListener('click',AddTarea)
