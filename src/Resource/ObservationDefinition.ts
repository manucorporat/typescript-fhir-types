
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ObservationDefinition_QualifiedInterval } from '../Resource/ObservationDefinition_QualifiedInterval';
import { ObservationDefinition_QuantitativeDetails } from '../Resource/ObservationDefinition_QuantitativeDetails';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. 
         */
        export class ObservationDefinition  {

            constructor() {
                this.code = new Coding();
            }

            
                /**
                 * This is a ObservationDefinition resource
                 */
                resourceType: string = 'ObservationDefinition;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A code that classifies the general type of observation.
                 */
                category? : Coding;
                

                /**
                 * Describes what will be observed. Sometimes this is called the observation "name".
                 */
                code : Coding;
                

                /**
                 * Data type allowed for the result of the observation.
                 */
                permittedDataType? : Coding[];
                

                /**
                 * Multiple results allowed for this kind of observation.
                 */
                multipleResultsAllowed? : boolean;
                

                /**
                 * Extensions for multipleResultsAllowed
                 */
                _multipleResultsAllowed? : Element;
                

                /**
                 * The method or technique used to perform the observation.
                 */
                method? : CodeableConcept;
                

                /**
                 * The preferred name to be used when reporting the results of this observation.
                 */
                preferredReportName? : string;
                

                /**
                 * Extensions for preferredReportName
                 */
                _preferredReportName? : Element;
                

                /**
                 * Characteristics for quantitative results of this observation.
                 */
                quantitativeDetails? : ObservationDefinition_QuantitativeDetails;
                

                /**
                 * Reference range for ordinal and continuous observations.
                 */
                qualifiedInterval? : ObservationDefinition_QualifiedInterval[];
                

                /**
                 * The set of valid coded results for the observation.
                 */
                validCodedValueSet? : Uri;
                

                /**
                 * Extensions for validCodedValueSet
                 */
                _validCodedValueSet? : Element;
                

                /**
                 * The set of normal coded results for the observation.
                 */
                normalCodedValueSet? : Uri;
                

                /**
                 * Extensions for normalCodedValueSet
                 */
                _normalCodedValueSet? : Element;
                

                /**
                 * The set of abnormal coded results for the observation.
                 */
                abnormalCodedValueSet? : Uri;
                

                /**
                 * Extensions for abnormalCodedValueSet
                 */
                _abnormalCodedValueSet? : Element;
                

                /**
                 * The set of critical coded results for the observation.
                 */
                criticalCodedValueSet? : Uri;
                

                /**
                 * Extensions for criticalCodedValueSet
                 */
                _criticalCodedValueSet? : Element;
                
        }
        