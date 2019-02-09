
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { Reference } from '../Resource/Reference';

        

        /**
         * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. 
         */
        export class MeasureReport_Population1  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The type of the population.
                 */
                code? : CodeableConcept;
                

                /**
                 * The number of members of the population in this stratum.
                 */
                count? : Integer;
                

                /**
                 * Extensions for count
                 */
                _count? : Element;
                

                /**
                 * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
                 */
                subjectResults? : Reference;
                
        }
        