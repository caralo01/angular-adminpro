import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscriton: Subscription;

  constructor() { 

    this.subscriton = this.regresaObservable()
          //.retry(2) //Para que lo intente otra vez, dos tipos
          .subscribe( 
            contador => {
                console.log('Subs', contador);
            },
            error => {
                console.error('Error en el obs', error);
            },
            () => {
                console.log( 'El obs terminó' );
            }
          );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriton.unsubscribe();
  }

  regresaObservable(): Observable<any>{
    let obs = new Observable<any> ( observer => {

      let contador = 0;
      
      let intervalo = setInterval( () => {

        contador += 1;
        
        let salida = {
          valor: contador
        }

        observer.next( salida );


        //if(contador === 3){
        //  clearInterval( intervalo );
        //  observer.complete();
        //}

        //if(contador === 2){
        //  clearInterval( intervalo ); Se comenta para que no se reinicie el contador
        //  observer.error('Auxilio!');
        //}
        
      }, 1000);
    });
    return obs
            .retry(2)
            .map( (resp:any) => {
              return resp.valor;
            })
            .filter( (valor, index) => {
              console.log('Filter', valor, index);

              if( valor % 2 === 1){
                //impar
                return true;
              }

              else {
                //par       
                return false;         
              }
            }); //despues del map, porque ya tenemos la respuesta buena
  }

}
