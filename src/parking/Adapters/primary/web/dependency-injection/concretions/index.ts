import infrastructures from "./infrastructures";
import actions from "./actions";
import services from "./useCases";
import repositories from "./repositories";
import presenters from "./presenters";

const cInfrastructures = infrastructures()
const cRepositories = repositories(cInfrastructures)
const cUsesCases = services(cRepositories)
const cActions = actions()
const cPresenters = presenters(cUsesCases,cActions)

const di = {
    parking: cPresenters.parking
}

export default di