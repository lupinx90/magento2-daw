define([
    'jquery',
    'jquery/ui',
    'jquery/validate',
    'mage/translate'
], function($){
    'use strict';
    return function(targetWidget) {
        $.validator.addMethod(
            "validate-name",
            function (v, element) {
                return $.mage.isEmptyNoTrim(v) || v.match(/^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s']+$/);
            },
            $.mage.__('Only alphabetic characters and whitespaces allowed')
        );
        $.validator.addMethod(
            "validate-company",
            function (v, element) {
                return $.mage.isEmptyNoTrim(v) || /^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d\s&.']+$/.test(v);
            },
            $.mage.__('Only alphanumeric characters, whitespaces and ampersand allowed')
        );
        $.validator.addMethod(
            "validate-streetES",
            function (v, element) {
                return $.mage.isEmptyNoTrim(v) || /^[A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d\s.\,']+$/.test(v);
            },
            $.mage.__('Only alphanumeric characters, whitespaces and punctuation signs allowed')
        );
        $.validator.addMethod(
            "validate-zipES",
            function (v, element) {
                return $.mage.isEmptyNoTrim(v) || /^\d{5}$/.test(v);
            },
            $.mage.__('Please enter a valid zip code (Ex: 18110).')
        );
        $.validator.addMethod(
            "validate-phoneES",
            function (v, element) {
                return $.mage.isEmptyNoTrim(v) || /^\d{9}$/.test(v);
            },
            $.mage.__('Please enter a valid phone number (Ex: 000000000).')
        );
        $.validator.addMethod(
            "validate-nif",
            function (v, element) {
                var numero, letr, letra;
                var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    
                var dni = v.toUpperCase();
    
                if(expresion_regular_dni.test(dni) === true){
                    numero = dni.substr(0,dni.length-1);
                    numero = numero.replace('X', 0);
                    numero = numero.replace('Y', 1);
                    numero = numero.replace('Z', 2);
                    letr = dni.substr(dni.length-1, 1);
                    numero = numero % 23;
                    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                    letra = letra.substring(numero, numero+1);
                    if (letra != letr) {
                        return $.mage.isEmptyNoTrim(v) || false;
                    }else{
                        return true;
                    }
                }else{
                    return $.mage.isEmptyNoTrim(v) || false;
                }
            },
            $.mage.__('NIF/NIE not valid')
        );
        return targetWidget;
    }
});