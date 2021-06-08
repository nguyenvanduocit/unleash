import { Logger } from '../logger';
import UserFeedbackStore, { IUserFeedback } from '../db/user-feedback-store';
import { IUnleashStores } from '../types/stores';
import { IUnleashConfig } from '../types/option';
import User from '../types/user';

export default class UserFeedbackService {
    private userFeedbackStore: UserFeedbackStore;

    private logger: Logger;

    constructor(
        { userFeedbackStore }: Pick<IUnleashStores, 'userFeedbackStore'>,
        { getLogger }: Pick<IUnleashConfig, 'getLogger'>,
    ) {
        this.userFeedbackStore = userFeedbackStore;
        this.logger = getLogger('services/user-feedback-service.js');
    }

    async getAllUserFeedback(user: User): Promise<IUserFeedback[]> {
        if (user.isAPI) {
            return [];
        }
        return this.userFeedbackStore.getAllUserFeedback(user.id);
    }

    async getFeedback(
        user_id: number,
        feedback_id: string,
    ): Promise<IUserFeedback> {
        return this.userFeedbackStore.getFeedback(user_id, feedback_id);
    }

    async updateFeedback(feedback: IUserFeedback): Promise<IUserFeedback> {
        return this.userFeedbackStore.updateFeedback(feedback);
    }
}

module.exports = UserFeedbackService;