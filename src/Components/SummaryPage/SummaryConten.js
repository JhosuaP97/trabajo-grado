import reviewing from "assets/character_images/reviewing.png";
import selected from "assets/character_images/selected.png";
import thumbsUp from "assets/character_images/thumbsUp.png";
export const SUMMARYPAGE = {
  firstStyle: {
    img: reviewing,
    title: <h2>¡Buen Trabajo!</h2>,
    content: (
      <>
        <p>
          Antes de finalizar la práctica no te olvides de aplicar las
          herramientas estadistícas solicitadas por tu profesor.
        </p>
        <br />
        <p>Aquí tienes los datos de tu práctica:</p>
      </>
    ),
  },
  secondStyle: {
    img: selected,
    title: <h2>¡Buen Trabajo!</h2>,
    content: (
      <>
        <p>
          Ahora debes realizar el mismo procedimiento pero esta vez con una
          cantidad de productos constante.
        </p>
        <br />
        <p>Luego tendrás que realizar la gráficas correspondientes.</p>
      </>
    ),
  },
  thirdStyle: {
    img: thumbsUp,
    title: <h2>¡Lo estas haciendo muy bien!</h2>,
    content: (
      <>
        <p>Falta poco para terminar, sigue esforzandote.</p>
        <br />
        <p>
          Ahora debes realizar el mismo procedimiento pero esta vez con una
          cantidad de productos constante.
        </p>
        <br />
        <p>Luego tendrás que realizar la gráficas correspondientes.</p>
      </>
    ),
  },
};
