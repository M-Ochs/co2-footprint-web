// Funktion zum Reinigen von Benutzereingaben (Sanitizing; Aufgabe 1.1b f)
function sanitizeInput(input) {
    // Entfernt alle HTML-Tags und potenziell gefährliche Zeichen wie <script> und </script>
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/*
Switch für Sprache bzw. LTR/RTL 
Aufgabe 1.1b c 
LTR ist die westliche Leserichtung "left-to-right" und wird am Beispiel deutsch "de" dargestellt
RTL ist die right-to-left Leserichtung und wird am Beispiel arabisch "ar" dargestellt
Als interaktiver Switch für den User werden Buttons eingebaut
*/
document.getElementById("language-switcher-de").addEventListener("click", function() {
    document.documentElement.lang = "de";  // Setzt die Sprache auf Deutsch
    document.body.style.direction = "ltr"; // Setzt das Layout auf LTR
    document.getElementById("language-switcher-de").classList.add("active");
    document.getElementById("language-switcher-ar").classList.remove("active");
});

document.getElementById("language-switcher-ar").addEventListener("click", function() {
    document.documentElement.lang = "ar";  // Setzt die Sprache auf Arabisch
    document.body.style.direction = "rtl"; // Setzt das Layout auf RTL
    document.getElementById("language-switcher-ar").classList.add("active");
    document.getElementById("language-switcher-de").classList.remove("active");
});



// Sortier- und Filterfunktion für die Tabelle mit den CO₂-Emissionsdaten
// Aufgabe 1.1b e

let sortDirection = { 0: true, 1: true, 2: true }; // True = aufsteigend, False = absteigend

// Fiktive Daten zu Demonstrationszwecken 
const data = [
    { country: 'Deutschland', company: '', co2: 1000 },
    { country: 'USA', company: '', co2: 1500 },
    { country: 'China', company: '', co2: 2000 },
    { country: 'Frankreich', company: '', co2: 1200 },
    { country: 'Indien', company: '', co2: 1800 },
    { country: 'Brasilien', company: '', co2: 900 },
    { country: 'Italien', company: '', co2: 950 },
    { country: 'Spanien', company: '', co2: 1300 },
    { country: 'Vereinigtes Königreich', company: '', co2: 1100 },
    { country: 'Australien', company: '', co2: 800 },
    { country: 'Kanada', company: '', co2: 1600 },
    { country: 'Japan', company: '', co2: 1400 },
    { country: 'Südafrika', company: '', co2: 750 },
    { country: 'Mexiko', company: '', co2: 1350 },
    { country: 'Russland', company: '', co2: 1700 },
    { country: 'Südkorea', company: '', co2: 1550 },
    { country: 'Saudi-Arabien', company: '', co2: 1450 },
    { country: 'Argentinien', company: '', co2: 1250 },
    { country: 'Nigeria', company: '', co2: 100 },
    { country: 'Indonesien', company: '', co2: 1150 },
    { country: '', company: 'A', co2: 10 },
    { country: '', company: 'B', co2: 150 },
    { country: '', company: 'C', co2: 20 },
    { country: '', company: 'D', co2: 200 },
    { country: '', company: 'E', co2: 18 },
    { country: '', company: 'F', co2: 90 },
    { country: '', company: 'G', co2: 50 },
    { country: '', company: 'H', co2: 130 },
    { country: '', company: 'I', co2: 100 },
    { country: '', company: 'J', co2: 80 },
    { country: '', company: 'K', co2: 100 },
    { country: '', company: 'L', co2: 100 },
    { country: '', company: 'M', co2: 50 },
    { country: '', company: 'N', co2: 150 },
    { country: '', company: 'O', co2: 100 },
    { country: '', company: 'P', co2: 150 },
    { country: '', company: 'Q', co2: 150 },
    { country: '', company: 'R', co2: 120 },
    { country: '', company: 'S', co2: 10 },
    { country: '', company: 'T', co2: 115 }
];

// Funktion, die die Tabelle mit gefilterten Daten füllt
function loadTableData(filteredData) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Tabelle zurücksetzen

    // Wenn keine Daten vorhanden sind, wird eine Nachricht angezeigt
    if (filteredData.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3" style="text-align: center;">Keine Daten gefunden</td>`;
        tableBody.appendChild(row);
    } else {
        // Tabelle mit den gefilterten Daten füllen
        filteredData.forEach(item => {
            const row = document.createElement('tr'); // Funktion sanitizeInput (Aufgabe 1.1b f)
            row.innerHTML = `<td>${sanitizeInput(item.country || "-")}</td><td>${sanitizeInput(item.company || "-")}</td><td>${item.co2}</td>`;
            tableBody.appendChild(row); 
        });
    }
}

// Funktion für das Filtern der Tabelle
function filterTable() {
    const filterCountry = document.getElementById('country-filter').value.toLowerCase();
    const filterCompany = document.getElementById('company-filter').value.toLowerCase();
    
    // Daten basierend auf den Eingabefeldern filtern
    const filteredData = data.filter(item => {
        const countryMatches = filterCountry
            ? item.country.toLowerCase().includes(filterCountry)
            : true; // Wenn kein Filter für Land, alle Länder anzeigen

        const companyMatches = filterCompany
            ? item.company.toLowerCase().includes(filterCompany)
            : true; // Wenn kein Filter für Unternehmen, alle Unternehmen anzeigen

        // Beide Filterbedingungen müssen erfüllt sein
        return countryMatches && companyMatches;
    });

    // Tabelle mit den gefilterten Daten füllen
    loadTableData(filteredData);
}


// Funktion zum Sortieren der Tabelle
function sortTable(columnIndex) {
    let sortedData = [...data]; // Kopie der Daten erstellen

    sortedData.sort((a, b) => {
        let aValue = columnIndex === 0 ? a.country : columnIndex === 1 ? a.company : a.co2;
        let bValue = columnIndex === 0 ? b.country : columnIndex === 1 ? b.company : b.co2;

        // Leere Werte immer ans Ende verschieben
        if (!aValue && !bValue) return 0; // Beide Werte leer, Reihenfolge bleibt gleich
        if (!aValue) return 1; // a leer, a nach hinten
        if (!bValue) return -1; // b leer, b nach hinten

        // Alphabetische Sortierung für Land und Unternehmen
        if (columnIndex === 0 || columnIndex === 1) {
            return sortDirection[columnIndex]
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }

        // Numerische Sortierung für CO₂-Emissionen
        if (columnIndex === 2) {
            return sortDirection[columnIndex]
                ? aValue - bValue
                : bValue - aValue;
        }

        return 0; // Standardfall 
    });

    // Umkehren der Sortierreihenfolge für die nächste Sortierung
    sortDirection[columnIndex] = !sortDirection[columnIndex];

    // Tabelle mit den sortierten Daten füllen
    loadTableData(sortedData);

    // Pfeile in den Tabellenkopfzeilen anpassen
    updateSortIcons(columnIndex);
}



// Funktion, um die Pfeile in den Tabellenüberschriften zu aktualisieren, wenn Sortierfunktion verwendet wird
function updateSortIcons(columnIndex) {
    // Alle Kopfzeilen zurücksetzen
    const headers = document.querySelectorAll('th');
    headers.forEach(header => header.classList.remove('sorted-asc', 'sorted-desc'));

    // Den richtigen Pfeil zur aktuellen Spalte hinzufügen
    if (sortDirection[columnIndex]) {
        headers[columnIndex].classList.add('sorted-asc');
    } else {
        headers[columnIndex].classList.add('sorted-desc');
    }
}

// Initiales Laden der Tabelle mit allen Daten
loadTableData(data);

// Event Listener für die Filter-Funktion
document.getElementById('country-filter').addEventListener('input', filterTable);
document.getElementById('company-filter').addEventListener('input', filterTable);


// Kontaktformular
// Funktion, um das Kontakt-Formular zu validieren und zu senden
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Verhindert das Standard-Formularabsenden
    event.preventDefault();

    // Eingabewerte abholen
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;5

    // Sanitizing der Eingabedaten
    const sanitized_name = sanitizeInput(name);
    const sanitized_email = sanitizeInput(email);
    const sanitized_message = sanitizeInput(message);
    
});





