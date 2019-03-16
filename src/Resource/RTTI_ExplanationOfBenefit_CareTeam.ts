
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';




            export interface IExplanationOfBenefit_CareTeam {
                
                    /**
                     * The members of the team who provided the overall service.
                     */
                    provider : IReference;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Sequence of careteam which serves to order and provide a link.
                     */
                    sequence? : number;
                    

                    /**
                     * Extensions for sequence
                     */
                    _sequence? : IElement;
                    

                    /**
                     * The practitioner who is billing and responsible for the claimed services rendered to the patient.
                     */
                    responsible? : boolean;
                    

                    /**
                     * Extensions for responsible
                     */
                    _responsible? : IElement;
                    

                    /**
                     * The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
                     */
                    role? : ICodeableConcept;
                    

                    /**
                     * The qualification which is applicable for this service.
                     */
                    qualification? : ICodeableConcept;
                    
            }
        


        export const RTTI_ExplanationOfBenefit_CareTeam: t.Type<IExplanationOfBenefit_CareTeam> = t.recursion( 'IExplanationOfBenefit_CareTeam', () =>
            t.intersection([
                
        t.type({
           provider: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
responsible: t.boolean,
_responsible: RTTI_Element,
role: RTTI_CodeableConcept,
qualification: RTTI_CodeableConcept
        })
        
            ])
        );
        

        