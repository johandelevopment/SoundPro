import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ProductComponent implements OnInit {
  id = "";
  title: string;
  imgTitle: string;
  titleProd1: string;
  titleProd2: string;
  titleProd3: string;
  titleProd4: string;
  titleProd5: string;
  titleProd6: string;
  titleProd7: string;
  titleProd8: string;
  titleProd9: string;

  imgProd1: string;
  textProd1A: string;
  textProd1B: string;
  product1 = false;
  div1 = true;

  imgProd2: string;
  textProd2A: string;
  textProd2B: string;
  product2 = false;
  div2 = true;

  imgProd3: string;
  textProd3A: string;
  textProd3B: string;
  product3 = false;
  div3 = true;

  imgProd4: string;
  textProd4A: string;
  textProd4B: string;
  product4 = false;
  div4 = true;

  imgProd5: string;
  textProd5A: string;
  textProd5B: string;
  product5 = false;
  div5 = true;

  imgProd6: string;
  textProd6A: string;
  textProd6B: string;
  product6 = false;
  div6 = true;

  imgProd7: string;
  textProd7A: string;
  textProd7B: string;
  product7 = false;
  div7 = true;

  imgProd8: string;
  textProd8A: string;
  textProd8B: string;
  product8 = false;
  div8 = true;

  imgProd9: string;
  textProd9A: string;
  textProd9B: string;
  product9 = false;
  div9 = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    if (typeof this.activatedRoute.params["value"].id != 'undefined') {
      this.id = this.activatedRoute.params["value"].id;
      if (this.id == "pioneer") {
        this.loadDescriptionProductsPioneer();
      }
      else if (this.id == "traktor") {
        this.loadDescriptionProductsTraktor();
      }
      else if (this.id == "dennon-dj") {
        this.loadDescriptionProductsDennondj();
      }
    }
  }
  goInit() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  loadDescriptionProductsPioneer() {
    this.title = "CONTROLADORES";
    this.imgTitle = "../assets/pioneer/pioneer.png";

    this.imgProd1 = "../assets/pioneer/xdjrx2.png";
    this.titleProd1 = "PIONEER XDJ RX2";
    this.textProd1A = 'El XDJ-RX2 es una actualización del popular XDJ-RX, combinado con características y rasgos de la serie insignia NXS2. El sistema todo en uno de 2 canales, ofrece una experiencia profesional como DJ cuando lo conectas a rekordbox dj a través de tu ordenador portátil o con música almacenada en un dispositivo USB.';
    this.textProd1B = 'El XDJ-RX2 incorpora una gran pantalla táctil de 7 pulgadas con teclado QWERTY, además de funciones heredadas del CDJ-2000NXS2 y de la DJM-9000NXS2, incluyendo el selector giratorio, filtro de pistas, short cuts, Sound Colour FX y Beat FX. Los 8 grandes Pads multicolor para directo, te ofrecen un control suave de Hot Cues, Beat Loop, Slip Loop y Beat Jump. Lleva tu actuación a un nivel superior mientras disfrutas de la facilidad y portabilidad que ofrece una solución todo en uno.'

    this.imgProd2 = "../assets/pioneer/ddjrx.png";
    this.titleProd2 = "PIONEER DDJ RX";
    this.textProd2A = 'El DDJ-RX es uno de los primeros controladores para rekordbox dj, que ofrece la máxima flexibilidad y comodidad para preparar tus temas con rekordbox y después, mediante plug-and-play, pinchar directamente desde tu ordenador portátil. El controlador es un fiel reflejo del software, que permite sesiones más intuitivas y creativas.';
    this.textProd2B = 'Los Jog wheels de baja latencia con Display central, Pads multicolores para directo y un mezclador de cuatro canales ofrecen una gran capacidad de respuesta, y un control táctil de todas las funciones de rekordbox dj. También puedes usar el DDJ-RX como un mezclador independiente.';

    this.imgProd3 = "../assets/pioneer/xdjr1.png";
    this.titleProd3 = "PIONEER XDJ R1";
    this.textProd3A = 'DJ DESDE DENTRO O FUERA DE LA CABINA. La estructura combinada de dos reproductores, un mezclador de primera y las potentes características significa que puedes pinchar con este dispositivo por sí solo. Una primicia en la industria, es que se puede controlar la XDJ-R1 inalámbrica desde un iPad, iPhone o iPod touch utilizando nuestra app remotebox.';
    this.textProd3B = ' Los DJs pueden conectar con la propia LAN inalámbrica del XDJ-R1 y utilizar su pantalla táctil para navegar intuitivamente por sus pistas de música y mezclas - todo desde fuera de la cabina. El XDJ-R1 ofrece amplias posibilidades a nuestros DJs en una unidad portátil, prepararada para rekordbox y asequible. Todo listo para que los DJs añadan su creatividad.';

    this.imgProd4 = "../assets/pioneer/ddjsz.png";
    this.titleProd4 = "PIONEER DDJ SZ";
    this.textProd4A = 'DISEÑADO PARA PROFESIONALES. El DDJ-SZ es el primer controlador de Pioneer que se parece en su configuración al CDJ-2000NXS, por su manejo intuitivo y su capacidad para scratchear a un nivel casi físico. Echa un vistazo a los jog wheels iluminados de gran tamaño y sorpréndete por su respuesta suave y rápida, y por encima de todo: de su precisión. Más aún, puedes realizar un seguimiento de la posición de reproducción o punto de referencia de cuenta atrás fácilmente, gracias al display en el Jog.';
    this.textProd4B = '';

    this.imgProd5 = "../assets/pioneer/ddjsx2.png";
    this.titleProd5 = "PIONEER DDJ SX2";
    this.textProd5A = 'PRIMER CONTROLADOR NATIVO DEL MUNDO CON BOTONES DEDICADOS PARA SERATO FLIP. El nuevo controlador DDJ-SX2 de 4 canales, viene con Pads de directo con LEDs multicolores para Cue Points y marcadores de puntos digitales encima del jog wheel. Además de eso, este controlador es Serato DJ DVS-actualizable y cuenta con jog wheel de latencia mejorados, por lo que es el compañero ideal scratch de DJ.';
    this.textProd5B = 'El DDJ-SX2 ofrece una manipulación nativa de Serato Flip; un Pack de Expansión para Serato DJ que ofrece la potencia para grabar y reproducir secuencias hot cue sobre la marcha. Los tres botones dedicados ponen a tu alcance la ejecución intuitiva de Serato Flip.';

    this.imgProd6 = "../assets/pioneer/ddjsx.png";
    this.titleProd6 = "PIONEER DDJ SX";
    this.textProd6A = 'EL PRIMER CONTROLADOR EXCLUSIVO PARA SERATO DJ. Software profesional Serato DJ incluido NUEVO Performance Pads y Control Dual Deck Múltiples opciones loop, Slicer, Slip NUEVO FX desarrollado por iZotope 8 puntos cue, 6 samples Tarjeta de sonido incorporada Compatibilidad MID';
    this.textProd6B = '';

    this.imgProd7 = "../assets/pioneer/ddjsr.png";
    this.titleProd7 = "PIONEER DDJSR";
    this.textProd7A = 'DISEÑADO PARA EL CONTROL NATIVO DE SERATO DJ. El DDJ-SR ofrece todas las características de rendimiento superior del controlador de cuatro canales DDJ-SX, incluyendo una tarjeta de sonido incorporada Serato y controles pre-asignados para el software Serato DJ.';
    this.textProd7B = 'El DDJ-SR incorpora características de nuestra gama pro que incluyen grandes jog wheels de ​​baja latencia y el modo Slip - que continúa silenciosamente la reproducción de la pista durante loops, scratches y reverses, recuperando la música de nuevo en el lugar correcto cuando el DJ lo requiere.';

    this.imgProd8 = "../assets/pioneer/ddj400.png";
    this.titleProd8 = "PIONEER DDJ 400";
    this.textProd8A = 'Aprender a actuar como DJ nunca ha sido más fácil que con el controlador DJ de 2 canales DDJ-400 para rekordbox dj. Repleto de funciones que te ayudarán a desarrollar tus habilidades cómodamente, el diseño de este controlador refleja el de nuestra configuración emblemática NXS2, con elementos compartidos como botones de cue exclusivos, Beat FX, controles de looping estilo CDJ y más. Como resultado, nuestro equipo DJ avanzado se siente natural al usarlo cuando estás listo para progresar.';
    this.textProd8B = 'Junto con nuestro software para performances profesionales, rekordbox dj, sus tutoriales interactivos te brindarán un conocimiento práctico sobre todo, desde el uso del controlador hasta la mezcla. Liviano y portátil, lleva el DDJ-400 contigo para practicar en sesiones o fiestas. Prepárate con tranquilidad escuchando tus ritmos y canciones a través de tu computadora o parlantes inalámbricos. Pronto te sentirás como en casa al tocar.';

    this.imgProd9 = "../assets/pioneer/ddjrz.png";
    this.titleProd9 = "PIONEER DDJ RZ";
    this.textProd9A = 'CONTROL DE NUEVA GENERACIÓN. El DDJ-RZ es el primer controlador profesional para rekordbox dj, que ofrece la máxima flexibilidad y comodidad para preparar tus temas con rekordbox y luego, mediante plug-and-play, para pinchar con el programa, directamente desde tu ordenador portátil.';
    this.textProd9B = 'El controlador es un fiel reflejo del software, que permite sesiones más intuitivas. Equipado con un crossfader magnético (calidad de club), dos tarjetas de sonido USB y el nuevo Oscillator Sampler, te convierte en un auténtico artista profesional en cabina.';


  }
  loadDescriptionProductsTraktor() {
    this.title = "CONTROLADORES";
    this.imgTitle = "../assets/traktor/traktor.png";

    this.imgProd1 = "../assets/pioneer/xdjrx2.png";
    this.titleProd1 = "TRAKTOR KONTROL S8";
    this.textProd1A = 'El XDJ-RX2 es una actualización del popular XDJ-RX, combinado con características y rasgos de la serie insignia NXS2. El sistema todo en uno de 2 canales, ofrece una experiencia profesional como DJ cuando lo conectas a rekordbox dj a través de tu ordenador portátil o con música almacenada en un dispositivo USB.';
    this.textProd1B = 'El XDJ-RX2 incorpora una gran pantalla táctil de 7 pulgadas con teclado QWERTY, además de funciones heredadas del CDJ-2000NXS2 y de la DJM-9000NXS2, incluyendo el selector giratorio, filtro de pistas, short cuts, Sound Colour FX y Beat FX. Los 8 grandes Pads multicolor para directo, te ofrecen un control suave de Hot Cues, Beat Loop, Slip Loop y Beat Jump. Lleva tu actuación a un nivel superior mientras disfrutas de la facilidad y portabilidad que ofrece una solución todo en uno.'

    this.imgProd2 = "../assets/pioneer/ddjrx.png";
    this.titleProd2 = "TRAKTOR KONTROL S5";
    this.textProd2A = 'El DDJ-RX es uno de los primeros controladores para rekordbox dj, que ofrece la máxima flexibilidad y comodidad para preparar tus temas con rekordbox y después, mediante plug-and-play, pinchar directamente desde tu ordenador portátil. El controlador es un fiel reflejo del software, que permite sesiones más intuitivas y creativas.';
    this.textProd2B = 'Los Jog wheels de baja latencia con Display central, Pads multicolores para directo y un mezclador de cuatro canales ofrecen una gran capacidad de respuesta, y un control táctil de todas las funciones de rekordbox dj. También puedes usar el DDJ-RX como un mezclador independiente.';

    this.imgProd3 = "../assets/pioneer/xdjr1.png";
    this.titleProd3 = "TRAKTOR KONTROL S4";
    this.textProd3A = 'DJ DESDE DENTRO O FUERA DE LA CABINA. La estructura combinada de dos reproductores, un mezclador de primera y las potentes características significa que puedes pinchar con este dispositivo por sí solo. Una primicia en la industria, es que se puede controlar la XDJ-R1 inalámbrica desde un iPad, iPhone o iPod touch utilizando nuestra app remotebox.';
    this.textProd3B = ' Los DJs pueden conectar con la propia LAN inalámbrica del XDJ-R1 y utilizar su pantalla táctil para navegar intuitivamente por sus pistas de música y mezclas - todo desde fuera de la cabina. El XDJ-R1 ofrece amplias posibilidades a nuestros DJs en una unidad portátil, prepararada para rekordbox y asequible. Todo listo para que los DJs añadan su creatividad.';

    this.imgProd4 = "../assets/pioneer/ddjsz.png";
    this.titleProd4 = "TRAKTOR KONTROL S2";
    this.textProd4A = 'DISEÑADO PARA PROFESIONALES. El DDJ-SZ es el primer controlador de Pioneer que se parece en su configuración al CDJ-2000NXS, por su manejo intuitivo y su capacidad para scratchear a un nivel casi físico. Echa un vistazo a los jog wheels iluminados de gran tamaño y sorpréndete por su respuesta suave y rápida, y por encima de todo: de su precisión. Más aún, puedes realizar un seguimiento de la posición de reproducción o punto de referencia de cuenta atrás fácilmente, gracias al display en el Jog.';
    this.textProd4B = '';

    this.imgProd5 = "../assets/pioneer/ddjsx2.png";
    this.titleProd5 = "TRAKTOR KONTROL F1";
    this.textProd5A = 'PRIMER CONTROLADOR NATIVO DEL MUNDO CON BOTONES DEDICADOS PARA SERATO FLIP. El nuevo controlador DDJ-SX2 de 4 canales, viene con Pads de directo con LEDs multicolores para Cue Points y marcadores de puntos digitales encima del jog wheel. Además de eso, este controlador es Serato DJ DVS-actualizable y cuenta con jog wheel de latencia mejorados, por lo que es el compañero ideal scratch de DJ.';
    this.textProd5B = 'El DDJ-SX2 ofrece una manipulación nativa de Serato Flip; un Pack de Expansión para Serato DJ que ofrece la potencia para grabar y reproducir secuencias hot cue sobre la marcha. Los tres botones dedicados ponen a tu alcance la ejecución intuitiva de Serato Flip.';

    this.imgProd6 = "../assets/pioneer/ddjsx.png";
    this.titleProd6 = "TRAKTOR KONTROL X1";
    this.textProd6A = 'EL PRIMER CONTROLADOR EXCLUSIVO PARA SERATO DJ. Software profesional Serato DJ incluido NUEVO Performance Pads y Control Dual Deck Múltiples opciones loop, Slicer, Slip NUEVO FX desarrollado por iZotope 8 puntos cue, 6 samples Tarjeta de sonido incorporada Compatibilidad MID';
    this.textProd6B = '';

    this.imgProd7 = "../assets/pioneer/ddjsr.png";
    this.titleProd7 = "TRAKTOR KONTROL Z2";
    this.textProd7A = 'DISEÑADO PARA EL CONTROL NATIVO DE SERATO DJ. El DDJ-SR ofrece todas las características de rendimiento superior del controlador de cuatro canales DDJ-SX, incluyendo una tarjeta de sonido incorporada Serato y controles pre-asignados para el software Serato DJ.';
    this.textProd7B = 'El DDJ-SR incorpora características de nuestra gama pro que incluyen grandes jog wheels de ​​baja latencia y el modo Slip - que continúa silenciosamente la reproducción de la pista durante loops, scratches y reverses, recuperando la música de nuevo en el lugar correcto cuando el DJ lo requiere.';

    this.imgProd8 = "../assets/pioneer/ddj400.png";
    this.titleProd8 = "TRAKTOR KONTROL Z1";
    this.textProd8A = 'Aprender a actuar como DJ nunca ha sido más fácil que con el controlador DJ de 2 canales DDJ-400 para rekordbox dj. Repleto de funciones que te ayudarán a desarrollar tus habilidades cómodamente, el diseño de este controlador refleja el de nuestra configuración emblemática NXS2, con elementos compartidos como botones de cue exclusivos, Beat FX, controles de looping estilo CDJ y más. Como resultado, nuestro equipo DJ avanzado se siente natural al usarlo cuando estás listo para progresar.';
    this.textProd8B = 'Junto con nuestro software para performances profesionales, rekordbox dj, sus tutoriales interactivos te brindarán un conocimiento práctico sobre todo, desde el uso del controlador hasta la mezcla. Liviano y portátil, lleva el DDJ-400 contigo para practicar en sesiones o fiestas. Prepárate con tranquilidad escuchando tus ritmos y canciones a través de tu computadora o parlantes inalámbricos. Pronto te sentirás como en casa al tocar.';

    this.imgProd9 = "";
    this.titleProd9 = "";
    this.textProd9A = '';
    this.textProd9B = '';
    this.div9 = false;

  }
  loadDescriptionProductsDennondj() {
    this.title = "CONTROLADORES";
    this.imgTitle = "../assets/dennon/dennon.png";

    this.imgProd1 = "../assets/pioneer/xdjrx2.png";
    this.titleProd1 = "DENNON MCX 8000";
    this.textProd1A = 'El XDJ-RX2 es una actualización del popular XDJ-RX, combinado con características y rasgos de la serie insignia NXS2. El sistema todo en uno de 2 canales, ofrece una experiencia profesional como DJ cuando lo conectas a rekordbox dj a través de tu ordenador portátil o con música almacenada en un dispositivo USB.';
    this.textProd1B = 'El XDJ-RX2 incorpora una gran pantalla táctil de 7 pulgadas con teclado QWERTY, además de funciones heredadas del CDJ-2000NXS2 y de la DJM-9000NXS2, incluyendo el selector giratorio, filtro de pistas, short cuts, Sound Colour FX y Beat FX. Los 8 grandes Pads multicolor para directo, te ofrecen un control suave de Hot Cues, Beat Loop, Slip Loop y Beat Jump. Lleva tu actuación a un nivel superior mientras disfrutas de la facilidad y portabilidad que ofrece una solución todo en uno.'

    this.imgProd2 = "../assets/pioneer/ddjrx.png";
    this.titleProd2 = "TRAKTOR KONTROL S5";
    this.textProd2A = 'El DDJ-RX es uno de los primeros controladores para rekordbox dj, que ofrece la máxima flexibilidad y comodidad para preparar tus temas con rekordbox y después, mediante plug-and-play, pinchar directamente desde tu ordenador portátil. El controlador es un fiel reflejo del software, que permite sesiones más intuitivas y creativas.';
    this.textProd2B = 'Los Jog wheels de baja latencia con Display central, Pads multicolores para directo y un mezclador de cuatro canales ofrecen una gran capacidad de respuesta, y un control táctil de todas las funciones de rekordbox dj. También puedes usar el DDJ-RX como un mezclador independiente.';
    this.div2 = false;

    this.imgProd3 = "../assets/pioneer/xdjr1.png";
    this.titleProd3 = "TRAKTOR KONTROL S4";
    this.textProd3A = 'DJ DESDE DENTRO O FUERA DE LA CABINA. La estructura combinada de dos reproductores, un mezclador de primera y las potentes características significa que puedes pinchar con este dispositivo por sí solo. Una primicia en la industria, es que se puede controlar la XDJ-R1 inalámbrica desde un iPad, iPhone o iPod touch utilizando nuestra app remotebox.';
    this.textProd3B = ' Los DJs pueden conectar con la propia LAN inalámbrica del XDJ-R1 y utilizar su pantalla táctil para navegar intuitivamente por sus pistas de música y mezclas - todo desde fuera de la cabina. El XDJ-R1 ofrece amplias posibilidades a nuestros DJs en una unidad portátil, prepararada para rekordbox y asequible. Todo listo para que los DJs añadan su creatividad.';
    this.div3 = false;

    this.imgProd4 = "../assets/pioneer/ddjsz.png";
    this.titleProd4 = "TRAKTOR KONTROL S2";
    this.textProd4A = 'DISEÑADO PARA PROFESIONALES. El DDJ-SZ es el primer controlador de Pioneer que se parece en su configuración al CDJ-2000NXS, por su manejo intuitivo y su capacidad para scratchear a un nivel casi físico. Echa un vistazo a los jog wheels iluminados de gran tamaño y sorpréndete por su respuesta suave y rápida, y por encima de todo: de su precisión. Más aún, puedes realizar un seguimiento de la posición de reproducción o punto de referencia de cuenta atrás fácilmente, gracias al display en el Jog.';
    this.textProd4B = '';
    this.div4 = false;

    this.imgProd5 = "../assets/pioneer/ddjsx2.png";
    this.titleProd5 = "TRAKTOR KONTROL F1";
    this.textProd5A = 'PRIMER CONTROLADOR NATIVO DEL MUNDO CON BOTONES DEDICADOS PARA SERATO FLIP. El nuevo controlador DDJ-SX2 de 4 canales, viene con Pads de directo con LEDs multicolores para Cue Points y marcadores de puntos digitales encima del jog wheel. Además de eso, este controlador es Serato DJ DVS-actualizable y cuenta con jog wheel de latencia mejorados, por lo que es el compañero ideal scratch de DJ.';
    this.textProd5B = 'El DDJ-SX2 ofrece una manipulación nativa de Serato Flip; un Pack de Expansión para Serato DJ que ofrece la potencia para grabar y reproducir secuencias hot cue sobre la marcha. Los tres botones dedicados ponen a tu alcance la ejecución intuitiva de Serato Flip.';
    this.div5 = false;

    this.imgProd6 = "../assets/pioneer/ddjsx.png";
    this.titleProd6 = "TRAKTOR KONTROL X1";
    this.textProd6A = 'EL PRIMER CONTROLADOR EXCLUSIVO PARA SERATO DJ. Software profesional Serato DJ incluido NUEVO Performance Pads y Control Dual Deck Múltiples opciones loop, Slicer, Slip NUEVO FX desarrollado por iZotope 8 puntos cue, 6 samples Tarjeta de sonido incorporada Compatibilidad MID';
    this.textProd6B = '';
    this.div6 = false;

    this.imgProd7 = "../assets/pioneer/ddjsr.png";
    this.titleProd7 = "TRAKTOR KONTROL Z2";
    this.textProd7A = 'DISEÑADO PARA EL CONTROL NATIVO DE SERATO DJ. El DDJ-SR ofrece todas las características de rendimiento superior del controlador de cuatro canales DDJ-SX, incluyendo una tarjeta de sonido incorporada Serato y controles pre-asignados para el software Serato DJ.';
    this.textProd7B = 'El DDJ-SR incorpora características de nuestra gama pro que incluyen grandes jog wheels de ​​baja latencia y el modo Slip - que continúa silenciosamente la reproducción de la pista durante loops, scratches y reverses, recuperando la música de nuevo en el lugar correcto cuando el DJ lo requiere.';
    this.div7 = false;

    this.imgProd8 = "../assets/pioneer/ddj400.png";
    this.titleProd8 = "TRAKTOR KONTROL Z1";
    this.textProd8A = 'Aprender a actuar como DJ nunca ha sido más fácil que con el controlador DJ de 2 canales DDJ-400 para rekordbox dj. Repleto de funciones que te ayudarán a desarrollar tus habilidades cómodamente, el diseño de este controlador refleja el de nuestra configuración emblemática NXS2, con elementos compartidos como botones de cue exclusivos, Beat FX, controles de looping estilo CDJ y más. Como resultado, nuestro equipo DJ avanzado se siente natural al usarlo cuando estás listo para progresar.';
    this.textProd8B = 'Junto con nuestro software para performances profesionales, rekordbox dj, sus tutoriales interactivos te brindarán un conocimiento práctico sobre todo, desde el uso del controlador hasta la mezcla. Liviano y portátil, lleva el DDJ-400 contigo para practicar en sesiones o fiestas. Prepárate con tranquilidad escuchando tus ritmos y canciones a través de tu computadora o parlantes inalámbricos. Pronto te sentirás como en casa al tocar.';
    this.div8 = false;

    this.imgProd9 = "";
    this.titleProd9 = "";
    this.textProd9A = '';
    this.textProd9B = '';
    this.div9 = false;

  }
}
