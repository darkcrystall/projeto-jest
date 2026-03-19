import { soma } from "../src/calc/soma";
import { subtracao } from "../src/calc/subtracao";
import { multiplicacao } from "../src/calc/multiplicacao";
import { divisao } from "../src/calc/divisao";


describe("Testes da calculadora", () => {
    describe("Testes da função de soma", () => {
        it("Soma dois números inteiros positivos", () => {
            expect(soma(2, 3)).toBe(5);
        });
        
        it("Soma dois números inteiros negativos", () => {
            expect(soma(-2, -3)).toBe(-5);
        });

        it("Soma um número positivo com zero", () => {
            expect(soma(2, 0)).toBe(2);
        });

        it("Soma um número negativo com zero", () => {
            expect(soma(-2, 0)).toBe(-2);
        });

        it("Soma zero com um número positivo", () => {
            expect(soma(0, 2)).toBe(2);
        });

        it("Soma zero com um número negativo", () => {
            expect(soma(0, -2)).toBe(-2);
        });
    
        it("Soma dois números decimais positivos", () => {
            expect(soma(0.25, 0.25)).toBe(0.5);
        });
    
        it("Soma dois números decimais negativos", () => {
            expect(soma(-0.1, -0.2)).not.toBe(-0.3);
        });
    });
    
    describe("Testes da função de subtração", () => {
        it("Subtrai dois números inteiros positivos", () => {
            expect(subtracao(2, 3)).toBe(-1);
        });
        
        it("Subtrai dois números inteiros negativos", () => {
            expect(subtracao(-2, -3)).toBe(1);
        });

        it("Subtrai zero por um número positivo", () => {
            expect(subtracao(0, 2)).toBe(-2);
        });

        it("Subtrai zero por um número negativo", () => {
            expect(subtracao(0, -2)).toBe(2);
        });

        it("Subtrai um número positivo por zero", () => {
            expect(subtracao(2, 0)).toBe(2);
        });

        it('Subtrai um número negativo por zero', () => {
            expect(subtracao(-2, 0)).toBe(-2);
        });
    
        it("Subtrai dois números decimais positivos", () => {
            expect(subtracao(0.25, 0.25)).toBe(0);
        });

        it("Subtrai dois números decimais negativos", () => {
            expect(subtracao(-0.5, -0.25)).toBe(-0.25);
        });
    });

    describe("Testes da função de divisão", () => {      
        it("Divide dois números inteiros positivos", () => {
            expect(divisao(10, 5)).toBe(2);
        });
        
        it("Divide dois números inteiros negativos", () => {
            expect(divisao(-10, -5)).toBe(2);
        });

        it("Divide um número qualquer por zero, lançando um erro", () => {
            expect(() => divisao(10, 0)).toThrow("Divisão por zero");
        });

        it("Divide zero por um número qualquer", () => {
            expect(divisao(0, 2)).toBe(0);
        });

        it("Divide dois números decimais positivos", () => {
            expect(divisao(0.5, 0.1)).toBe(5);
        });

        it("Divide dois números inteiros negativos", () => {
            expect(divisao(-0.5, -0.1)).toBe(5);
        });
    });

    describe("Testes da função de multiplicação", () => {
        it("Multiplica dois números inteiros positivos", () => {
            expect(multiplicacao(10, 10)).toBe(100);
        });

        it("Multiplica dois números inteiros negativos", () => {
            expect(multiplicacao(-10, -10)).toBe(100);
        });

        it("Multiplica um número qualquer por zero", () => {
            expect(multiplicacao(10, 0)).toBe(0);
        });

        it("Multiplica zero por um número qualquer", () => {
            expect(multiplicacao(0, 10)).toBe(0);
        });

        it("Multiplica dois números decimais positivos", () => {
            expect(multiplicacao(0.5, 0.5)).toBe(0.25);
        });

        it("Multiplica dois números decimais negativos", () => {
            expect(multiplicacao(-0.5, -0.5)).toBe(0.25);
        });
    });
});