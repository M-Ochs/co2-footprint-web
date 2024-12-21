# CO₂-Footprint Webseite


## Projektübersicht

Dieses Projekt wurde als Fallstudie im Rahmen eines Universitätskurses entwickelt. EcoBalance Foundation ist der Name einer fiktiven Non-Profit-Organisation, die sich mit dem Klimawandel beschäftigt. Die Webanwendung soll Benutzer:innen dabei helfen, die CO₂-Emissionen verschiedener Länder und Unternehmen zu analysieren, indem  Tabellen mit Filter- und Sortierfunktionen zur Verfügung gestellt werden. Die Daten sind fiktiv.   
Die Anwendung ist in **HTML**, **CSS**, und **JavaScript** implementiert und verwendet **TailwindCSS** für die Gestaltung.


## Features

- **Datenvisualisierung**: Anzeige von CO₂-Emissionen von Ländern und Unternehmen in einer interaktiven Tabelle.
- **Filter- und Sortierfunktion**: Dynamisches Filtern und Sortieren der Daten basierend auf Land, Unternehmen oder CO₂-Emissionen.
- **Sprachumschaltung**: Unterstützung für Deutsch (LTR) und Arabisch (RTL).
- **Kontaktformular**: Ermöglicht Benutzer:innen, Nachrichten über ein Formular zu senden (lokale Validierung eingeschlossen).
- **Sicherheit**: Benutzer:innen-Eingaben werden durch eine Sanitizing-Funktion gegen XSS-Angriffe abgesichert.


## Technologien

Das Projekt wurde mit folgenden Technologien entwickelt:

- **HTML5**: Strukturierung des Inhalts.
- **CSS3**: Layout und Design, einschließlich **TailwindCSS**
- **JavaScript**: Implementierung interaktiver Funktionen.


## Installation & Ausführung

### Voraussetzungen
- Webbrowser 
- Texteditor für Änderungen am Code

**Repository klonen**:
   "```bash"
   git clone https://github.com/M-Ochs/co2-footprint-web.git

## Ordnerstruktur des Projekts

co2-footprint-web/
├── README.md             # Dokumentation des Projekts
├── assets/               # Ressourcen-Ordner für das Logo
│   └── EcoBalance_Foundation_Desktop_Logo.png  
    └── EcoBalance_Foundation_Mobile_Logo.png        
├── src/                  # Quellcode und Projektdateien
│   ├── index.html        # Startseite
│   ├── contact.html      # Kontaktseite
│   ├── data.html         # Tabelle mit CO₂-Emission sortiert nach Ländern und Unternehmen
│   ├── statistics.html   # Statistiken zu CO₂-Emissionen
│   ├── privacy.html      # Datenschutzerklärung
│   ├── impressum.html    # Impressum
│   ├── calculator.html   # CO₂-Rechner mit integriertem iFrame
│   ├── styles.css        # Zentrale CSS-Datei
│   └── script.js         # Skript für dynamische Funktionen


## CO₂-Rechner

In die Anwendung wurde ein CO₂-Rechner integriert, der Benutzer:innen ermöglicht, ihren individuellen CO₂-Fußabdruck zu berechnen. Der Rechner wird über ein **iframe** eingebettet und stammt von [Carbon Footprint](https://www.carbonfootprint.com/).

### Nutzung des CO₂-Rechners
- Navigiere zur Seite **Rechner** in der Webanwendung.
- Fülle die Felder im Rechner aus, um deinen CO₂-Fußabdruck zu ermitteln.
- Der Rechner ist im begrenzten Rahmen des Projekts nicht für die Mobile-Version angepasst.

### Hinweis
Der eingebettete CO₂-Rechner wird extern gehostet. Daher unterliegt seine Funktionalität und Datenverarbeitung den Datenschutzrichtlinien des ursprünglichen Anbieters. Weitere Informationen findest du [hier](https://www.carbonfootprint.com/termsandconditions.html).

### Quellenangabe

Der CO₂-Rechner wurde zur Verfügung gestellt von **[Carbon Footprint Ltd](https://www.carbonfootprint.com/integrate.html)**.


## Quellen

- HTML, CSS und JavaScript Code basiert auf der [mdn Web Docs](https://developer.mozilla.org/en-US/).
- TailwindCSS wurde aus der offiziellen [TailwindCSS-Dokumentation](https://tailwindcss.com/docs) verwendet.
- Der `<iframe>`-Tag wurde gemäß der [mdn HTML-Dokumentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) verwendet.


## Lizenz
Dieses Projekt steht unter der MIT-Lizenz. 


## Hinweis
Dies ist ein akademisches Projekt für die Erbringung einer Prüfungsleistung in Form einer Fallstudie und nicht für den produktiven Einsatz gedacht. Alle Daten und Funktionen dienen ausschließlich zu Demonstrationszwecken. Die Daten und Namen sind fiktiv.