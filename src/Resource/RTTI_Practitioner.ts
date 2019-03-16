
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_HumanName, IHumanName} from './RTTI_HumanName';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Practitioner_Qualification, IPractitioner_Qualification} from './RTTI_Practitioner_Qualification';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export enum PractitionerGenderKind {
                male = 'male',
female = 'female',
other = 'other',
unknown = 'unknown'
            }
const PractitionerGenderKindKeys = t.keyof({
                [PractitionerGenderKind.male]: null,
[PractitionerGenderKind.female]: null,
[PractitionerGenderKind.other]: null,
[PractitionerGenderKind.unknown]: null
            });


            export interface IPractitioner {
                
                    /**
                     * This is a Practitioner resource
                     */
                    resourceType: 'Practitioner';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * An identifier that applies to this person in this role.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Whether this practitioner's record is in active use.
                     */
                    active? : boolean;
                    

                    /**
                     * Extensions for active
                     */
                    _active? : IElement;
                    

                    /**
                     * The name(s) associated with the practitioner.
                     */
                    name? : IHumanName[];
                    

                    /**
                     * A contact detail for the practitioner, e.g. a telephone number or an email address.
                     */
                    telecom? : IContactPoint[];
                    

                    /**
                     * Address(es) of the practitioner that are not role specific (typically home address). 
Work addresses are not typically entered in this property as they are usually role dependent.
                     */
                    address? : IAddress[];
                    

                    /**
                     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
                     */
                    gender? : PractitionerGenderKind;
                    

                    /**
                     * Extensions for gender
                     */
                    _gender? : IElement;
                    

                    /**
                     * The date of birth for the practitioner.
                     */
                    birthDate? : string;
                    

                    /**
                     * Extensions for birthDate
                     */
                    _birthDate? : IElement;
                    

                    /**
                     * Image of the person.
                     */
                    photo? : IAttachment[];
                    

                    /**
                     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
                     */
                    qualification? : IPractitioner_Qualification[];
                    

                    /**
                     * A language the practitioner can use in patient communication.
                     */
                    communication? : ICodeableConcept[];
                    
            }
        


        export const RTTI_Practitioner: t.Type<IPractitioner> = t.recursion( 'IPractitioner', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Practitioner')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
name: t.array(RTTI_HumanName),
telecom: t.array(RTTI_ContactPoint),
address: t.array(RTTI_Address),
gender: PractitionerGenderKindKeys,
_gender: RTTI_Element,
birthDate: t.string,
_birthDate: RTTI_Element,
photo: t.array(RTTI_Attachment),
qualification: t.array(RTTI_Practitioner_Qualification),
communication: t.array(RTTI_CodeableConcept)
        })
        
            ])
        );
        

        