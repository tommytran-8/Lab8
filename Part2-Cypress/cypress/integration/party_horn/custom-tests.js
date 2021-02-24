describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });


  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke("val", 33).trigger("input");
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke("val", 33).trigger("input");
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and Sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes from mute to 1 bar when volume is changed from 0 to 1', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes from 1 bar to 2 bars when volume is changed from 33 to 34', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes from 2 bars to 3 bars when volume is changed from 66 to 67', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear().type(' ');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('200');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').should('have.length', 1);
  });

});
