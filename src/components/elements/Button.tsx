interface model_btn{
    types?: string;
    texte: any;
    couleur?: string;
    type?:"button" | "submit" | "reset";
    functions?:any,
    taille?:number;
}

const Button = ({type,texte,couleur, functions,taille}:model_btn) => {
  return (
    <button className={`text-white bg-${couleur} w-[96%] md:w-56 h-14 rounded-lg bold-20 hover:underline`} type={type} onClick={functions}>
        {texte}
    </button>
  )
}

export default Button
