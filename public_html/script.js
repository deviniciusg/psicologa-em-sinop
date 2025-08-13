    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    });

    // Example: track CTA click (you can hook analytics here)
    document.getElementById('cta-agenda').addEventListener('click', ()=>{
      try{console.log('CTA Agende clicado') }catch(e){}
    })