class Utils {
            static configLanguage = "PT-BR";
            static configTime = { 
                hour: "2-digit", 
                minute: "2-digit" 
            };

            static getFormatDate () {
                let date = new Date();
                return date.toLocaleDateString(this.configLanguage, this.configTime);
            }
        }

        class Conta {
            constructor(nome, numero, saldo) {
                this.nome = nome;
                this.numero = numero;
                this.saldo = saldo;
                this.extrato = [];
            }

            get exibirExtrato () {
                console.log(' ------ Extrato da conta ------ ');

                this.extrato.forEach(item => {
                    console.log(item);
                });

                console.log(' ------ Fim do extrato ------ ');
            }

            registrarNoExtrato (item) {
                this.extrato.push(item);
            }
        }

        class ContaPoupanca extends Conta {
            #taxaDeSaque = 0.10;

            saque (valor) {
                let taxaDeSaqueDoValor = valor * this.#taxaDeSaque;
                let valorDeSaqueComATaxa = valor + taxaDeSaqueDoValor;

                if (valorDeSaqueComATaxa > this.saldo) {
                    throw new Error('Saldo insuficiente');
                }

                this.saldo = this.saldo - valorDeSaqueComATaxa;
                this.registrarNoExtrato(`${Utils.getFormatDate()} - Saque de: ${valor} - Saldo de: ${this.saldo}`);
                console.log(`O saldo atual após o saque é de: R$ ${this.saldo}`);
            }

            deposito (valor) {
                this.saldo = this.saldo + valor;
                this.registrarNoExtrato(`${Utils.getFormatDate()} - Depósito de: ${valor} - Saldo de: ${this.saldo}`);
                console.log(`O saldo atual após o depósito é de: R$ ${this.saldo}`);
            }
        }

        let novaContaPoupanca = new ContaPoupanca("Teste", 123, 1000);
        novaContaPoupanca.saque(100);
        novaContaPoupanca.saque(200);
        novaContaPoupanca.deposito(500);

        novaContaPoupanca.exibirExtrato;