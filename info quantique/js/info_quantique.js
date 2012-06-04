(function() {

  jQuery(function() {
    var annee, carte, dollar, leg, legende, legendes, liste, point, _i, _j, _len, _len2, _ref;
    $('#close_menu').click(function() {
      $('nav').fadeOut();
      return $('#open_menu').show();
    });
    $('#open_menu').click(function() {
      $('nav').fadeIn();
      return $(this).hide();
    });
    Raphael("intrique", 30, 30, function() {
      return this.dessine('intrication');
    });
    _ref = $('.dollar');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      dollar = _ref[_i];
      Raphael(dollar, 35, 35, function() {
        return this.dessine('dollar');
      });
    }
    legendes = {
      1900: ['Planck découvre la plus petite quantité énérgetique connue le "quanta", c\'est le début de la physique quantique.'],
      1931: ['Incomplétude de Gödel. Traumatisme chez les logiciens.'],
      1932: ['Neumann énonce le problème de la mesure. Grand moment de doute pour la physique quantique.'],
      1936: ['Turing invente sa fameuse machine.'],
      1948: ['Shannon énonce la théorie de l\'information.'],
      1961: ['Rényi découvre l\'entropie de Rényi qui permet de calculer la quantité d\'information pour des ordinateurs quantiques.'],
      1982: ['Feynman énonce l\'idée d utiliser la physique quantique pour effectuer des calculs sur le quantique dans le livre "Simulating physics with computer".', 'Benioff reprend cette idée pour l\'appliquer à tous types de calcul.', 'Premier théorème et démonstration de l\'informatiques quantique.'],
      1984: ['Premier protocole quantique (cryptage).'],
      1985: ['Premier algorithme quantique (algorithme de Deutsch).'],
      1993: ['Preuve de l\'utilité de la machine quantique pour les systèmes quantiques : tout système quantique est simulable en un temps polynomiale par un ordinateur quantique.'],
      1994: ['Premier algorithme quantique pratique (algorithme de Shor). Factorisation rapide d un nombre.'],
      1995: ['Définition formelle du qbit.'],
      1996: ['Algorithme (de Grover) de recherche en base de données non triée en'],
      1998: ['Premier calculateur quantique de 2 qubits.'],
      1999: ['Algorithme de Grover sur un calculateur quantique de 3 qubits.'],
      2000: ['Algorithme de Grover sur un calculateur quantique de 5 qubits.'],
      2001: ['Algorithme de Shor sur des calculateurs quantiques de 7 qbits d une durée de vie de quelques minutes (wetware).'],
      2006: ['Calculateur quantique à base solide de 12 qbits.'],
      2007: ['Dwave annonce un calculateur quantique à base solide de 16 qbits. Et promet de doubler le nombre de qbits chaque année.'],
      2012: ['Le National Institute of Standards and Technology réalise un calculateur quantique à 350 qbits.']
    };
    for (annee in legendes) {
      legende = legendes[annee];
      $('#frise').append(point = $('<li>', {
        "class": 'annee',
        text: annee
      }));
      point.append(liste = $('<ul>', {
        "class": 'legende',
        id: annee
      }));
      for (_j = 0, _len2 = legende.length; _j < _len2; _j++) {
        leg = legende[_j];
        liste.append($('<li>', {
          "class": 'tooltip',
          text: leg
        }));
      }
    }
    return carte = Raphael("carte", 1000, 400, function() {
      var circle, i, labo, theme, tooltip, _len3, _ref2, _results;
      this.labos = [
        {
          name: "Joint Quantum Institute, College Park",
          created_at: 2006,
          coor: "38°59′48″N, 76°55′39″W",
          site: "http://www.jqi.umd.edu/",
          themes: ["Physique Atomique et Optique", "Decoherence quantique et Informatique"]
        }, {
          name: "Institute for Quantum Information, Caltech",
          created_at: 2011,
          site: "http://www.iqi.caltech.edu/",
          coor: "34°09′22″N, 118°7′55″W",
          themes: ["Cryptographie quantique", "Resistance a la degradation"]
        }, {
          name: "Group of Applied Physics, Geneva",
          created_at: 1989,
          coor: "46°12′N, 6°09′E",
          site: "http://www.gapoptique.unige.ch/",
          themes: ["Communication supraluminique", "OQ Optique"]
        }, {
          name: "Kwiat's Group in Urbana-Champaign",
          site: "http://research.physics.illinois.edu/qi/photonics/",
          created_at: 1991,
          coor: "40°6′37″N, 88°13′42″W",
          themes: ["Photons"]
        }, {
          name: "Institut de Ciences Fotonices, Barcelona",
          created_at: 2002,
          site: "http://www.icfo.es/index.php?section=home0&lang=english",
          coor: "41°23′N, 2°11′E",
          themes: ["Sciences de la lumiere", "Simulation quantique"]
        }, {
          name: "Institute for Quantum Information Science, Calgary",
          created_at: 1992,
          coor: "51°03′N, 114°04′W",
          site: "http://www.iqis.org/index.php",
          themes: ["Algorithmique quantique", "Reseaux quantiques"]
        }, {
          name: "Centre for Quantum Technologies, Singapore",
          site: "http://www.quantumlah.org/",
          created_at: 2007,
          coor: "1.3°N, 103.8°E",
          themes: ["Ingenierie quantique"]
        }, {
          name: "Institut für Quantenoptik und Quanteninformation, Vienna",
          created_at: null,
          coor: "48°12′30″N, 16°22′23″E",
          themes: ["Micro puce quantique"]
        }, {
          name: "Experimental Quantum Physics, Munich",
          created_at: 1999,
          site: "xqp.physik.uni-muenchen.de",
          coor: "48°8′0″N, 11°34′0″E",
          themes: ["Mesure, interference et decoherence"]
        }, {
          site: "cpcc.northwestern.edu",
          created_at: null,
          coor: "42.054853°N, 87.673945°W",
          themes: ["Communication photonique"]
        }, {
          name: "Quantum Computation and Information, Bristol",
          site: "http://www.cs.bris.ac.uk/Research/QuantumComputing/",
          created_at: 2008,
          coor: "51°27′N, 2°35′W",
          themes: ["Algorithme quantique", "Base de donnees quantique"]
        }, {
          name: "Center for Quantum Photonics, Bristol",
          created_at: 2003,
          coor: "51°27′N, 2°35′W",
          site: "http://www.phy.bris.ac.uk/groups/cqp/index.html",
          themes: ["Physique photonique"]
        }, {
          name: "Ultrafast Quantum Optics Group, Oxford",
          site: "http://www2.physics.ox.ac.uk/research/ultrafast-quantum-optics-and-optical-metrology",
          created_at: 2009,
          coor: "51°45′07″N, 1°15′28″W",
          themes: ["Optique quantique"]
        }, {
          name: "Quantum Transport group, Delft",
          created_at: null,
          coor: "52°0′54″N, 4°21′24″E",
          themes: ["Ingienerie quantique"]
        }, {
          name: "Centre for Quantum Information and Communication, Bruxelles",
          site: "http://quic.ulb.ac.be/",
          created_at: 1996,
          coor: "50°51′N, 04°21′E",
          themes: ["Informatque quantique theorique"]
        }, {
          name: "Groupe Informatique Quantique Fondement et Applications",
          site: "http://gdriqfa.unice.fr",
          created_at: 2004,
          coor: "48° 51′ 24″ N, 2° 21′ 07″ E",
          themes: ["Communication quantique", "Qbits et decoherence"]
        }, {
          name: "Updating Quantum Cryptographie, Japon",
          site: "http://www.uqcc.org",
          created_at: 2010,
          coor: "35°40′15″N, 139°46′19″E",
          themes: ["Cryptographie quantique", " Finance par le gouvernement japonais"]
        }
      ];
      this.dessine('countries');
      this.regex = /(\d+(?:\.\d+)?)[\xb0\s]?\s*(?:(\d+(?:\.\d+)?)['\u2019\u2032\s])?\s*(?:(\d+(?:\.\d+)?)["\u201d\u2033\s])?\s*([SNEW])?/i;
      this.latLonToXY = function(lat, lon) {
        return {
          cx: lon * 2.6938 + 465.4,
          cy: lat * -2.6938 + 227.066
        };
      };
      this.parseLatLon = function(latlon) {
        var coor, lat, lon;
        coor = latlon.split(this.regex);
        if (coor != null) {
          lat = +coor[1] + (coor[2] || 0) / 60 + (coor[3] || 0) / 3600;
        }
        if (coor[4].toUpperCase() === 'S') lat = -lat;
        if (coor != null) {
          lon = +coor[6] + (coor[7] || 0) / 60 + (coor[8] || 0) / 3600;
        }
        if (coor[9].toUpperCase() === 'W') lon = -lon;
        return this.latLonToXY(lat, lon);
      };
      _ref2 = this.labos;
      _results = [];
      for (i = 0, _len3 = _ref2.length; i < _len3; i++) {
        labo = _ref2[i];
        circle = this.circle().attr($.extend(this.parseLatLon(labo.coor), {
          fill: "#00bf85",
          stroke: "#ccc",
          "stroke-width": 2,
          r: 5
        })).click(function() {
          var el;
          el = $("#labo_" + this.id).removeClass('ferme').addClass('ouvert');
          $('#cartographie .tooltip span').slideUp();
          return $('span', el).slideDown();
        }).hover(function() {
          return $("#labo_" + this.id).show();
        }, function() {
          return $("#labo_" + this.id).hide();
        });
        $('#cartographie .legende').append(tooltip = $('<li>', {
          "class": 'tooltip ferme',
          text: "" + labo.name + "\n",
          id: "labo_" + circle.id
        }));
        _results.push(tooltip.append($('<span>', {
          text: (function() {
            var _k, _len4, _ref3, _results2;
            _ref3 = labo.themes;
            _results2 = [];
            for (_k = 0, _len4 = _ref3.length; _k < _len4; _k++) {
              theme = _ref3[_k];
              _results2.push("" + theme + "\n");
            }
            return _results2;
          })()
        })));
      }
      return _results;
    });
  });

}).call(this);
