import axios from "axios";
import { searchValue } from "../utils/utils";

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export const apiHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

const API_DICTIONARY = axios.create({
    headers: apiHeader,
    baseURL: baseUrl,
    timeout: 6000,
});

export const getDictionaryWord = (word) => 
    API_DICTIONARY.get(`/${word}`).then((resp) => {
      
      const response = resp.data[0];

      const phonetic = response.phonetic || searchValue(response.phonetics, 'text');
      const audio = searchValue(response.phonetics, 'audio');


      const wordData = {
         word: response.word,
         phonetic: phonetic,
         audio: audio
      }

      return wordData
    })
