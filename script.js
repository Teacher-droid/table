    // #dynamic table script
    
    
    // Activy listing
    //===============
    const activites = [
        { titre: "Patchwork",  prix: 25 }, // 0
        { titre: "Peinture",  prix: 35 }, // 1
        { titre: "Encadrement",  prix: 22 }, // 2
        { titre: "Gymnastique",   prix: 17 }, // 3
        { titre: "Photographie",  prix: 45 }, // 4
        { titre: "Emaux",  prix: 30 }, // 5
        { titre: "Création textile",  prix: 30 }, // 6
        { titre: "Roller",  prix: 58 }, // 7
        { titre: "Généalogie",  prix: 15 }, // 8
        { titre: "Scrapbooking",  prix: 20 }, // 9
        { titre: "Frais d'adhésions", prix: 35 }  // 10
      ];
  

      function initTableau() {
     
        const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
       
        for ( let i = 0; i < activites.length; i++ )
        {
          const ligne = tbody.insertRow();
       
          // activities cells
          let cellActivite = ligne.insertCell();
          cellActivite.innerHTML = activites[ i ].titre;
       
          // cotisations cells
          let cellCotisation = ligne.insertCell();
          cellCotisation.innerHTML = activites[ i ].prix;
       
          // choices cells
          let cellChoix = ligne.insertCell();
       
          // prices cells
          cellTarif = ligne.insertCell();
          cellTarif.innerHTML = 0;
        }
      }

      

          // choices cells
          let cellChoix = ligne.insertCell();
          if ( i === activites.length -1 )
          {
            // last line, mandatory fee (subscription fee)
            cellChoix.innerHTML = '<input type="checkbox" disabled checked />';
          }
          else
          {
            cellChoix.innerHTML = '<input type="checkbox" />';
          }

          
          function calculCotisation()
          {
            const tabTr = document.querySelector( '#table-facture' ).querySelector( 'tbody' ).querySelectorAll( 'tr' );
            let total = 0;
           
            for ( let i = 0; i < activites.length; i++ )
            {
              if ( tabTr[ i ]. cells[ 2 ].childNodes[ 0 ].checked )
              {
                tabTr[ i ].cells[ 3 ].innerHTML = activites[ i ].prix;
                total += activites[ i ].prix;
              }
              else
              {
                tabTr[ i ].cells[ 3 ].innerHTML = 0;
              }
            }
            document.querySelector( '#total' ).innerHTML = total;
          }
      

          function initTableau() {
     
            const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
           
            for ( let i = 0; i < activites.length; i++ )
            {
              const ligne = tbody.insertRow();
           
              // activities cells
              let cellActivite = ligne.insertCell();
              cellActivite.innerHTML = activites[ i ].titre;
              cellActivite.className = 'lib-acti';
           
              // cotisations cells
              let cellCotisation = ligne.insertCell();
              cellCotisation.innerHTML = euro.format( activites[ i ].prix );
              cellCotisation.className = 'fld-num';
           
              // choices cells 
              let cellChoix = ligne.insertCell();
              cellChoix.className = 'fld-log';
           
              if ( i === activites.length -1 )
              {
                // last line, mandatory fee (subscription fee)
                cellChoix.innerHTML = '<input type="checkbox" disabled checked />';
              }
              else
              {
                cellChoix.innerHTML = '<input type="checkbox" />';
              }
           
              // prices cells
              cellTarif = ligne.insertCell();
              cellTarif.innerHTML = euro.format( 0 );
              cellTarif.className = 'fld-num';
            }
          }
      