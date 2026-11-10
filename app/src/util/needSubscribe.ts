import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";
import {isInIOS} from "../protyle/util/compatibility";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    // Sbloccato: nessuna sottoscrizione cloud proprietaria richiesta
    return false;
};

/**
 * Abilita l'utilizzo di sincronizzazione S3 e WebDAV ovunque
 */
export const isPaidUser = () => {
    return true;
};
