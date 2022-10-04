import styled from 'styled-components'
import {TEXT} from '../../theme/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: auto;
`
const Title = styled.p`
  margin: 4px auto;
  text-align: center;
`

const Body = styled.p`
  text-align: left;
  margin-right: auto;
  width: 100%;
`

const TermsOfService = () => {
  return (
    <Container>
      <Title>
        <TEXT.BodyBold>AUTONOMY SOFTWARE, INC.</TEXT.BodyBold>
      </Title>
      <Title>
        <TEXT.BodyBold>TERMS OF USE</TEXT.BodyBold>
      </Title>

      <Body>
        <TEXT.Body>Last Updated: October 4, 2022</TEXT.Body>
      </Body>

      <Body>
        <TEXT.BodyBold>
          OUR INTERFACE IS NOT OFFERED TO PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF, OR ARE
          LOCATED IN, ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE IN THE UNITED STATES OF
          AMERICA (COLLECTIVE, “US PERSONS”). MOREOVER, THE INTERFACE IS NOT OFFERED TO PERSONS OR
          ENTITIES WHO RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR HAVE A
          REGISTERED OFFICE IN ANY RESTRICTED TERRITORY (AS DEFINED BELOW, AND ANY SUCH PERSON OR
          ENTITY FROM A RESTRICTED TERRITORY, A “RESTRICTED PERSON”). USE OF A VIRTUAL PRIVATE
          NETWORK (“VPN”) OR ANY OTHER PRIVACY OR ANONYMIZATION TOOL OR TECHNIQUE TO CIRCUMVENT OR
          ATTEMPT TO CIRCUMVENT THE RESTRICTIONS SET FORTH HEREIN IS PROHIBITED.
        </TEXT.BodyBold>
      </Body>

      <Body>
        <TEXT.Body>
          Autonomy Software, Inc. (“Autonomy”) or any successor/affiliate to Autonomy (collectively,
          “we,” “us,” or “our”) provides a website-hosted user interface available at
          https://app.overlay.market (“Interface”). The Interface provides access to a decentralized
          protocol run by smart contracts on the Ethereum blockchain that allows users to trade
          digital assets (the “Protocol”). The Interface is non-custodial and you retain control
          over your Digital Assets at all times.
        </TEXT.Body>
      </Body>

      <Body>
        <TEXT.BodyBold>
          THE PROTOCOL IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.
          Although Autonomy has developed a portion of the code for the Protocol, it does not
          provide, own, or control the Protocol, which is run by smart contracts deployed on the
          Ethereum blockchain. Upgrades and modifications to the Protocol are not managed by
          Autonomy, rather by the community. No developer or entity involved in creating the
          Protocol will be liable for any claims or damages whatsoever associated with your use,
          inability to use, or your interaction with other users of, the Protocol, including any
          direct, indirect, incidental, special, exemplary, punitive or consequential damages, or
          loss of profits, cryptocurrencies, tokens, or anything else of value.
        </TEXT.BodyBold>
      </Body>

      <Body>
        <TEXT.Body>
          Please read these Terms carefully, as these Terms govern your use of our Interface, and
          expressly cover your rights and obligations, and our disclaimers and limitations of legal
          liability, relating to such use. By clicking “I agree” to these Terms or otherwise
          accessing or using our Interface, you accept and agree to be bound by and to comply with
          these Terms, including the mandatory arbitration provision in Section 13. If you do not
          agree to these Terms, you must not access or use our Interface. You are entering into a
          binding agreement.
        </TEXT.Body>
      </Body>

      <Body>
        <TEXT.Body>
          Please carefully review the disclosures and disclaimers set forth in these Terms in their
          entirety before using any software developed by Autonomy Software, Inc. The information in
          Section 3 provides important details about the legal obligations associated with your use
          of the Interface. By accessing or using the Interface, you agree that we do not provide
          execution, settlement, or clearing services of any kind and we are not responsible for the
          execution, settlement, or clearing of transactions automated through the Interface.
        </TEXT.Body>
      </Body>
    </Container>
  )
}

export default TermsOfService
