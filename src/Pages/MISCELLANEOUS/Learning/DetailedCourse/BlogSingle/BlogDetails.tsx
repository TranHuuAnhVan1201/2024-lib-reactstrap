import { H4, LI, P, UL } from '../../../../../AbstractElements'
import { Comments } from '../../../../../utils/Constant'

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <UL className=" blog-social d-block simple-list">
        <LI className="digits">25 July 2023</LI>
        <LI>
          <i className="icofont icofont-user" />
          Mark <span>Jecno </span>
        </LI>
        <LI className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 <span>{'Hits'}</span>
        </LI>
        <LI className="digits">
          <i className="icofont icofont-ui-chat" />
          {Comments}
        </LI>
      </UL>
      <H4 className='mt-4'>{"Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief."}</H4>
      <div className="single-blog-content-top">
        <P>{"Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed."}</P>
        <P>{"Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of one's own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists."}</P>
      </div>
    </div>
  )
}

export default BlogDetails