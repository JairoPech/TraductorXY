var adminCode = "899406";
var isAdminPanelActive = false;
var editingWordData = null;

// Cargar la lista de palabras desde el almacenamiento local o usar la lista predeterminada
var defaultWordList = [
       {
        word: 'ALFABETO',
        spanish: {
            capital: 'Alfabeto',
            lower: 'alfabeto'
        },
        romalinch: {
            capital: 'Aλξaβιтó',
            lower: 'aλξaβιтó'
        }
    },
    {
        word: 'BOLSA',
        spanish: {
            capital: 'Bolsa',
            lower: 'bolsa'
        },
        romalinch: {
            capital: 'Бoσσa',
            lower: 'бoσσa'
        }
    },
    {
        word: 'БOΠΣA',
        spanish: {
            capital: 'Bolsa',
            lower: 'bolsa'
        },
        romalinch: {
            capital: 'Бoπσa',
            lower: 'бoπσa'
        }
    },
    {
        word: 'ESCRITORIO',
        spanish: {
            capital: 'Escritorio',
            lower: 'escritorio'
        },
        romalinch: {
            capital: 'Бß̤uπo',
            lower: 'бß̤uπo'
        }
    },
    {
        word: 'SILLA',
        spanish: {
            capital: 'Silla',
            lower: 'silla'
        },
        romalinch: {
            capital: 'Caδëíπa',
            lower: 'caδëíπa'
        }
    },
    {
        word: 'CAMA',
        spanish: {
            capital: 'Cama',
            lower: 'cama'
        },
        romalinch: {
            capital: 'Caμa',
            lower: 'caμa'
        }
    },
    {
        word: 'CÁMARA',
        spanish: {
            capital: 'Cámara',
            lower: 'cámara'
        },
        romalinch: {
            capital: 'Caμeπá',
            lower: 'caμeπá'
        }
    },
    {
        word: 'ΞNÁТEΛΛ',
        spanish: {
            capital: 'Cámara',
            lower: 'cámara'
        },
        romalinch: {
            capital: 'Ξnáтeλλ',
            lower: 'ξnáтeλλ'
        }
    },
    {
        word: 'SÍMBOLO',
        spanish: {
            capital: 'Símbolo',
            lower: 'símbolo'
        },
        romalinch: {
            capital: 'Ciλт',
            lower: 'ciλт'
        }
    },
    {
        word: 'PARAGUAS',
        spanish: {
            capital: 'Paraguas',
            lower: 'paraguas'
        },
        romalinch: {
            capital: 'Coνтnoácua',
            lower: 'coνтnoácua'
        }
    },
    {
        word: 'ΦAΠAΦꞲIE',
        spanish: {
            capital: 'Paraguas',
            lower: 'paraguas'
        },
        romalinch: {
            capital: 'Φaπaφʝie',
            lower: 'φaπaφʝie'
        }
    },
    {
        word: 'COΡТEХ',
        spanish: {
            capital: 'Teléfono',
            lower: 'teléfono'
        },
        romalinch: {
            capital: 'Teléfono',
            lower: 'teléfono'
        }
    },
    {
        word: 'TELÉFONO',
        spanish: {
            capital: 'Teléfono',
            lower: 'teléfono'
        },
        romalinch: {
            capital: 'Teléfono',
            lower: 'teléfono'
        }
    },
    {
        word: 'DIÉRESIS',
        spanish: {
            capital: 'Diéresis',
            lower: 'diéresis'
        },
        romalinch: {
            capital: 'Δß̤áπeσiσ',
            lower: 'δß̤áπeσiσ'
        }
    },
    {
        word: 'ESCALERA',
        spanish: {
            capital: 'Escalera',
            lower: 'escalera'
        },
        romalinch: {
            capital: 'Eσcαλëiπá',
            lower: 'eσcαλëiπá'
        }
    },
    {
        word: 'FAMILIA',
        spanish: {
            capital: 'Familia',
            lower: 'familia'
        },
        romalinch: {
            capital: 'Ξáμiӡß̤aλ',
            lower: 'ξáμiӡß̤aλ'
        }
    },
    {
        word: 'VENTANA',
        spanish: {
            capital: 'Ventana',
            lower: 'ventana'
        },
        romalinch: {
            capital: 'Ξiνeσтna',
            lower: 'ξiνeσтna'
        }
    },
    {
        word: 'XAΝEΛΛÁ',
        spanish: {
            capital: 'Ventana',
            lower: 'ventana'
        },
        romalinch: {
            capital: 'Xaνeλλá',
            lower: 'xaνeλλá'
        }
    },
    {
        word: 'HIJO',
        spanish: {
            capital: 'Hijo',
            lower: 'hijo'
        },
        romalinch: {
            capital: 'Ξiӡe',
            lower: 'ξiӡe'
        }
    },
    {
        word: 'FOTO',
        spanish: {
            capital: 'Foto',
            lower: 'foto'
        },
        romalinch: {
            capital: 'Ξoтo',
            lower: 'ξoтo'
        }
    },
    {
        word: 'FOTOGRAFÍA',
        spanish: {
            capital: 'Fotografía',
            lower: 'fotografía'
        },
        romalinch: {
            capital: 'Ξoтoɣnaξiӡß̤a',
            lower: 'ξoтoɣnaξiӡß̤a'
        }
    },
    {
        word: 'VÍDEO',
        spanish: {
            capital: 'Vídeo',
            lower: 'vídeo'
        },
        romalinch: {
            capital: 'Γnaβaξáπe',
            lower: 'γnaβaξáπe'
        }
    },
    {
        word: 'ΒIΔEO',
        spanish: {
            capital: 'Vídeo',
            lower: 'vídeo'
        },
        romalinch: {
            capital: 'Βiδeo',
            lower: 'βiδeo'
        }
    }
];

var wordList = JSON.parse(localStorage.getItem('wordList')) || defaultWordList;

function translateText(toSpanish) {
    var inputText = document.getElementById("input-text").value;
    var convertedText = "";
    var hasError = false;

    if (toSpanish) {
        var parts = inputText.split(" ");
        for (var i = 0; i < parts.length; i++) {
            var word = parts[i];
            var isCapital = i === 0 || ['.', '¿', '?', '¡', '!', ':', ';'].includes(parts[i-1].slice(-1));
            var translation = getSpanishTranslation(word, isCapital);
            if (translation === word) {
                hasError = true;
                convertedText += `<span class="error-text">${translation}</span>`;
            } else {
                convertedText += translation;
            }
            convertedText += (i < parts.length - 1 ? " " : "");
        }
    } else {
        var words = inputText.split(" ");
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var isCapital = i === 0 || ['.', '¿', '?', '¡', '!', ':', ';'].includes(words[i-1].slice(-1));
            var translation = getRomalinchTranslation(word, isCapital);
            if (translation === word) {
                hasError = true;
                convertedText += `<span class="error-text">${translation}</span>`;
            } else {
                convertedText += translation;
            }
            convertedText += (i < words.length - 1 ? " " : "");
        }
    }

    document.getElementById("output-text").innerHTML = convertedText;

    if (hasError) {
        showError();
    } else {
        showSuccess();
    }
}

function getSpanishTranslation(word, isCapital) {
    var wordData = wordList.find(item => 
        item.romalinch.capital.toUpperCase() === word.toUpperCase() || 
        item.romalinch.lower.toUpperCase() === word.toUpperCase()
    );
    if (wordData) {
        return isCapital ? wordData.spanish.capital : wordData.spanish.lower;
    } else {
        return word;
    }
}

function getRomalinchTranslation(word, isCapital) {
    var wordData = wordList.find(item => 
        item.spanish.capital.toUpperCase() === word.toUpperCase() || 
        item.spanish.lower.toUpperCase() === word.toUpperCase()
    );
    if (wordData) {
        return isCapital ? wordData.romalinch.capital : wordData.romalinch.lower;
    } else {
        return word;
    }
}

function showAdminPanel() {
    if (!isAdminPanelActive) {
        var inputCode = prompt("Ingrese el código de administrador:");
        if (inputCode === adminCode) {
            isAdminPanelActive = true;
            var adminPanel = document.getElementById("admin-panel");
            adminPanel.style.display = "block";
            populateWordList();
        } else {
            alert("Código de administrador incorrecto.");
        }
    } else {
        alert("El panel de administrador ya está abierto.");
    }
}

function populateWordList() {
    var wordListContainer = document.getElementById("word-list-container");
    wordListContainer.innerHTML = "";

    wordList.forEach(wordData => {
        var row = document.createElement("tr");

        var capitalSpanishCell = document.createElement("td");
        capitalSpanishCell.textContent = wordData.spanish.capital;

        var lowerSpanishCell = document.createElement("td");
        lowerSpanishCell.textContent = wordData.spanish.lower;

        var capitalRomalincheCell = document.createElement("td");
        capitalRomalincheCell.textContent = wordData.romalinch.capital;

        var lowerRomalincheCell = document.createElement("td");
        lowerRomalincheCell.textContent = wordData.romalinch.lower;

        var actionCell = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Borrar";
        deleteButton.classList.add("word-item-button");
        deleteButton.onclick = function() {
            deleteWord(wordData.word);
        };

        var editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("word-item-button", "edit");
        editButton.onclick = function() {
            editWord(wordData);
        };

        actionCell.appendChild(deleteButton);
        actionCell.appendChild(editButton);
        row.appendChild(capitalSpanishCell);
        row.appendChild(lowerSpanishCell);
        row.appendChild(capitalRomalincheCell);
        row.appendChild(lowerRomalincheCell);
        row.appendChild(actionCell);

        wordListContainer.appendChild(row);
    });
}

function addNewWord(capitalSpanish, lowerSpanish, capitalRomalinche, lowerRomalinche) {
    var newWordData = {
        word: capitalRomalinche,
        romalinch: {
            capital: capitalRomalinche,
            lower: lowerRomalinche
        },
        spanish: {
            capital: capitalSpanish,
            lower: lowerSpanish
        }
    };
    wordList.push(newWordData);
    localStorage.setItem('wordList', JSON.stringify(wordList));
    console.log(`La palabra "${capitalRomalinche}" ha sido agregada a la base de datos.`);
    populateWordList();
    clearAddWordForm();
}

function deleteWord(word) {
    var index = wordList.findIndex(item => item.word === word);
    if (index !== -1) {
        wordList.splice(index, 1);
        localStorage.setItem('wordList', JSON.stringify(wordList));
        console.log(`La palabra "${word}" ha sido eliminada de la base de datos.`);
        populateWordList();
    }
}

function editWord(wordData) {
    editingWordData = wordData;
    document.getElementById("new-word-capital-spanish").value = wordData.spanish.capital;
    document.getElementById("new-word-lower-spanish").value = wordData.spanish.lower;
    document.getElementById("new-word-capital-romalinche").value = wordData.romalinch.capital;
    document.getElementById("new-word-lower-romalinche").value = wordData.romalinch.lower;
}

function closeAdminPanelWithoutSaving() {
    isAdminPanelActive = false;
    var adminPanel = document.getElementById("admin-panel");
    adminPanel.style.display = "none";
}

function closeAdminPanelWithSaving() {
    isAdminPanelActive = false;
    var adminPanel = document.getElementById("admin-panel");
    adminPanel.style.display = "none";
    localStorage.setItem('wordList', JSON.stringify(wordList));
}

function showError() {
    var errorNote = document.getElementById("error-note");
    errorNote.style.display = "block";
    errorNote.textContent = "No se encontró una o más palabras en la base de datos.";
}

function showSuccess() {
    var errorNote = document.getElementById("error-note");
    errorNote.style.display = "none";
    var successNote = document.getElementById("success-note");
    successNote.style.display = "block";
}

function clearAddWordForm() {
    document.getElementById("new-word-capital-spanish").value = "";
    document.getElementById("new-word-lower-spanish").value = "";
    document.getElementById("new-word-capital-romalinche").value = "";
    document.getElementById("new-word-lower-romalinche").value = "";
}