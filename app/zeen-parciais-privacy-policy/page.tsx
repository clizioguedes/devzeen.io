import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Zeen Parciais',
  description: 'Política de privacidade do aplicativo Zeen Parciais',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
      
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Última atualização: 27 de janeiro de 2026
          </p>
          <p className="mb-4">
            Esta Política de Privacidade descreve como o aplicativo <strong>Zeen Parciais</strong> (&quot;nós&quot;, &quot;nosso&quot; ou &quot;aplicativo&quot;) 
            coleta, usa e protege suas informações pessoais quando você utiliza nosso serviço.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
          <p className="mb-4">
            Nosso aplicativo coleta as seguintes informações pessoais:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nome:</strong> Para identificação e personalização da experiência do usuário</li>
            <li><strong>E-mail:</strong> Para autenticação e comunicação com o usuário</li>
          </ul>
          <p className="mt-4">
            Coletamos essas informações apenas quando você fornece voluntariamente ao criar uma conta ou utilizar nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Como Usamos Suas Informações</h2>
          <p className="mb-4">
            As informações coletadas são utilizadas para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer e manter nosso serviço de classificação livre</li>
            <li>Autenticar usuários e gerenciar contas</li>
            <li>Personalizar a experiência do usuário no aplicativo</li>
            <li>Enviar notificações importantes relacionadas ao serviço</li>
            <li>Melhorar e otimizar nosso aplicativo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Retenção e Exclusão de Dados</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2">⚠️ Política de Exclusão Automática</p>
            <p>
              <strong>Todos os seus dados pessoais (nome e e-mail) são automaticamente excluídos quando você faz logout do aplicativo.</strong>
            </p>
          </div>
          <p className="mb-4">
            Esta política garante que:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Não mantemos seus dados pessoais armazenados após o logout</li>
            <li>Cada sessão é independente e não persiste informações pessoais</li>
            <li>Você tem controle total sobre seus dados ao decidir quando fazer logout</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
          <p className="mb-4">
            Nós <strong>não vendemos, alugamos ou compartilhamos</strong> suas informações pessoais com terceiros, exceto:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Para proteger nossos direitos, propriedade ou segurança</li>
            <li>Com seu consentimento explícito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
          <p className="mb-4">
            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acesso não autorizado</li>
            <li>Alteração, divulgação ou destruição não autorizada</li>
            <li>Perda acidental</li>
          </ul>
          <p className="mt-4">
            Embora nos esforcemos para proteger seus dados, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Gratuidade do Serviço</h2>
          <p>
            Este aplicativo é <strong>totalmente gratuito</strong>. Não cobramos taxas de uso e não monetizamos seus dados pessoais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
          <p className="mb-4">
            Nosso aplicativo pode utilizar cookies e tecnologias similares para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manter sua sessão ativa durante o uso</li>
            <li>Melhorar a funcionalidade do aplicativo</li>
            <li>Analisar padrões de uso (de forma anônima)</li>
          </ul>
          <p className="mt-4">
            Importante: Os cookies de sessão também são removidos após o logout.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Direitos do Usuário</h2>
          <p className="mb-4">
            Você tem os seguintes direitos em relação aos seus dados pessoais:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acesso:</strong> Solicitar uma cópia dos dados que mantemos sobre você</li>
            <li><strong>Retificação:</strong> Corrigir dados imprecisos ou incompletos</li>
            <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados (realizada automaticamente no logout)</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
            <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Privacidade de Crianças</h2>
          <p>
            Nosso aplicativo não é direcionado a menores de 13 anos. Não coletamos conscientemente informações pessoais de crianças. 
            Se você acredita que uma criança nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas apropriadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Alterações nesta Política</h2>
          <p className="mb-4">
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Publicando a nova Política de Privacidade nesta página</li>
            <li>Atualizando a data de &quot;Última atualização&quot; no topo desta política</li>
            <li>Enviando uma notificação por e-mail (quando apropriado)</li>
          </ul>
          <p className="mt-4">
            Recomendamos que você revise esta Política de Privacidade periodicamente para se manter informado sobre como estamos protegendo suas informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Legislação Aplicável</h2>
          <p>
            Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
            e outras legislações aplicáveis de proteção de dados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contato</h2>
          <p className="mb-4">
            Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, 
            entre em contato conosco através de:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="mb-2"><strong>E-mail:</strong> clizioguedes@devzeen.io</p>
            <p><strong>Responsável pela Proteção de Dados:</strong> Clizio Guedes</p>
          </div>
        </section>

        <section className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ao utilizar o aplicativo Zeen Parciais, você concorda com esta Política de Privacidade. 
            Se você não concordar com qualquer parte desta política, por favor, não utilize nosso aplicativo.
          </p>
        </section>
      </div>
    </div>
  );
}
